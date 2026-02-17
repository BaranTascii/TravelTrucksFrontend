import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../redux/campers/campersSlice";
import filtersReducer from "../redux/filters/filtersSlice";
import favoritesReducer from "../redux/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
