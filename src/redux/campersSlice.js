import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { filters } = state;

    const params = {
      location: filters.location,
      type: filters.type,
      ...filters.features,
    };

    const response = await axios.get("/api/campers", { params });
    return response.data;
  },
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default campersSlice.reducer;
