import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createReservation = createAsyncThunk(
  "reservations/createReservation",
  async (reservationData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://your-api-url.com/reservations",
        reservationData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
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
        state.error = null;
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
