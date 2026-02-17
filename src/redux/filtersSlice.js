import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    features: {},
  },
  reducers: {
    setLocation: (s, a) => {
      s.location = a.payload;
    },
    setType: (s, a) => {
      s.type = a.payload;
    },
    toggleFeature: (s, a) => {
      s.features[a.payload] = !s.features[a.payload];
    },
  },
});

export const { setLocation, setType, toggleFeature } = slice.actions;
export default slice.reducer;
