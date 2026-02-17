import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../redux/campersSlice";
import filtersReducer from "../redux/filtersSlice";
import favoritesReducer from "../redux/favoritesSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
