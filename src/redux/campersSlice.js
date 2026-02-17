import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetch",
  async (_, thunkAPI) => {
    const { filters, campers } = thunkAPI.getState();

    const response = await axios.get("/api/campers", {
      params: {
        page: campers.page,
        limit: 4,
        location: filters.location,
        type: filters.type,
        ...filters.features,
      },
    });

    return response.data;
  },
);

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    page: 1,
    hasMore: true,
    status: "idle",
  },
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
    nextPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.hasMore = false;
        } else {
          state.items.push(...action.payload);
        }
        state.status = "succeeded";
      });
  },
});

export const { resetCampers, nextPage } = slice.actions;
export default slice.reducer;
