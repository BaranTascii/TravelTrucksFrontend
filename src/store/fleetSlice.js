import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "fleet/fetch",
  async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.location) params.append("location", filters.location);
    if (filters.form) params.append("form", filters.form);

    const response = await axios.get(API_URL, { params });
    return Array.isArray(response.data) ? response.data : response.data.items;
  },
);

const fleetSlice = createSlice({
  name: "fleet",
  initialState: { items: [], favorites: [], loading: false, error: null },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      state.favorites = state.favorites.includes(id)
        ? state.favorites.filter((favId) => favId !== id)
        : [...state.favorites, id];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = fleetSlice.actions;
export default fleetSlice.reducer;
