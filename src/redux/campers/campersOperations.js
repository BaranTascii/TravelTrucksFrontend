import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "../../services/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetch",
  async (params, thunkAPI) => {
    try {
      const res = await getCampers(params);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const res = await getCamperById(id);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
