import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./campersOperations";

const initialState = {
  items: [],
  selected: null,
  page: 1,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers(state) {
      state.items = [];
      state.page = 1;
    },
    nextPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selected = action.payload;
      });
  },
});

export const { resetCampers, nextPage } = campersSlice.actions;
export default campersSlice.reducer;
