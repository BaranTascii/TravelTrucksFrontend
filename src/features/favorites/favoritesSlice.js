import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: "",
  features: {
    airConditioner: false,
    kitchen: false,
    bathroom: false,
    tv: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    toggleFeature(state, action) {
      const feature = action.payload;
      state.features[feature] = !state.features[feature];
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setLocation, setVehicleType, toggleFeature, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
