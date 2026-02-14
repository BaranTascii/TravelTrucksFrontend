import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../features/campers/campersSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import filtersReducer from "../features/filters/filtersSlice";
import reservationsReducer from "../features/reservations/reservationsSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    reservations: reservationsReducer,
  },
});
