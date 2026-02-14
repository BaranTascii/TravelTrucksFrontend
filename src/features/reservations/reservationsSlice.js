import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://your-api-url.com";

export const createReservation = createAsyncThunk(
  "reservations/createReservation",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/reservations`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    isLoading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetReservationState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReservation.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetReservationState } = reservationsSlice.actions;
export default reservationsSlice.reducer;
