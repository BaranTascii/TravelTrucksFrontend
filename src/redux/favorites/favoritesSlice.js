import { createSlice } from "@reduxjs/toolkit";

const stored = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: stored },
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      state.items.includes(id)
        ? (state.items = state.items.filter((i) => i !== id))
        : state.items.push(id);

      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
