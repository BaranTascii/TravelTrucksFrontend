import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    features: {},
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      state.features[feature] = !state.features[feature];
    },
  },
});

export const { setLocation, setType, toggleFeature } = filtersSlice.actions;
export default filtersSlice.reducer;
