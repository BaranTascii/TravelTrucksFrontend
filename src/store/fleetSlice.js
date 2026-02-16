import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, filters = {} }, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams({ page, limit: 4, ...filters });
      const response = await axios.get(`${API_URL}?${params}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    loading: false,
    hasMore: true,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      state.favorites = state.favorites.includes(id)
        ? state.favorites.filter((favId) => favId !== id)
        : [...state.favorites, id];
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    resetItems: (state) => {
      state.items = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload];
        if (action.payload.length < 4) state.hasMore = false;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { toggleFavorite, resetItems } = campersSlice.actions;
export default campersSlice.reducer;
