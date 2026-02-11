import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampersApi } from "./campersApi";
import { fetchCamperByIdApi } from "./campersApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ filters, page }, thunkAPI) => {
    try {
      const response = await fetchCampersApi(filters, page);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await fetchCamperByIdApi(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    selectedCamper: null,
    page: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearCampers(state) {
      state.items = [];
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCampers } = campersSlice.actions;
export default campersSlice.reducer;
