import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from './campersApi';

export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers',
    async (params, { rejectWithValue }) => {
        try {
            const response = await getCampers(params);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchCamperById = createAsyncThunk(
    'campers/fetchCamperById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await getCamperById(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        selectedCamper: null,
        page: 1,
        limit: 4,
        loading: false,
        error: null,
    },
    reducers: {
        resetCampers(state) {
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
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.items = [...state.items, ...action.payload];
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchCamperById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedCamper = action.payload;
            })
            .addCase(fetchCamperById.rejected, (state,) => {
                state.loading = false;
            });
    },
});

export const { resetCampers, incrementPage } = campersSlice.actions;
export default campersSlice.reducer;