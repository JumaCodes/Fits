// src/redux/slices/subscriberSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk: subscribe user
export const subscribeUser = createAsyncThunk(
  "subscribers/subscribeUser",
  async (email, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/subscribe`,
        { email }
      );
      return res.data; // { message: "Subscribed successfully" }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to subscribe"
      );
    }
  }
);

// Async thunk: fetch subscribers (for admin dashboard)
export const fetchSubscribers = createAsyncThunk(
  "subscribers/fetchSubscribers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/subscribe`
      );
      return res.data; // expected: array of subscribers
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch subscribers"
      );
    }
  }
);

const subscriberSlice = createSlice({
  name: "subscribers",
  initialState: {
    list: [], // all subscribers (for admin)
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Subscribe User
      .addCase(subscribeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(subscribeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Subscribers
      .addCase(fetchSubscribers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubscribers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchSubscribers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subscriberSlice.reducer;
