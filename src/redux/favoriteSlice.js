import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("favorites")) || [];

const slice = createSlice({
  name: "favorites",
  initialState: { items: saved },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;

      if (state.items.includes(id)) {
        state.items = state.items.filter((i) => i !== id);
      } else {
        state.items.push(id);
      }

      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = slice.actions;
export default slice.reducer;
