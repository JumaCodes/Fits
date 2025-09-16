import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;

// Async Thunk to Fetch All Orders (Admin only)
export const fetchAllOrders = createAsyncThunk("adminOrders/fetchAllOrders", async (_, {rejectWithValue}
) => { 
    try {
        const response = await axios.get(`${API_URL}/api/admin/orders`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Async Thunk to Update Order delivery Status (Admin only)
export const updateOrderStatus = createAsyncThunk("adminOrders/updateOrderStatus", async ({ id, status }, { rejectWithValue }) => {
    try {
        const response = await axios.put(
          `${API_URL}/api/admin/orders/${id}`,
          { status },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Async Thunk to delete Order  (Admin only)
export const deleteOrder = createAsyncThunk("adminOrders/deleteOrder", async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`${API_URL}/api/admin/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        return id;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const adminOrderSlice = createSlice({
    name: "adminOrders",
    initialState: {
        orders: [],
        totalOrders: 0,
        totalSales: 0,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => { 
        builder
          .addCase(fetchAllOrders.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchAllOrders.fulfilled, (state, action) => {
            state.loading = false;
            const orders = Array.isArray(action.payload) ? action.payload : [];
            state.orders = orders;
            state.totalOrders = orders.length;

            state.totalSales = orders.reduce(
              (acc, order) => acc + (order.totalPrice || 0),
              0
            );
          })
          .addCase(fetchAllOrders.rejected, (state, action) => {
            state.loading = false;
            state.error =
              action.payload?.message ||
              action.error?.message ||
              "Failed to load orders";
          })

          // Update Order Status
          .addCase(updateOrderStatus.fulfilled, (state, action) => {
            const updatedOrder = action.payload;
            const orderIndex = state.orders.findIndex(
              (order) => order._id === updatedOrder._id
            );
            if (orderIndex !== -1) {
              state.orders[orderIndex] = updatedOrder;
            }
          })
          // Delete Order
          .addCase(deleteOrder.fulfilled, (state, action) => {
            state.orders = state.orders.filter(
              (order) => order._id !== action.payload
            );
          });
    }
});

export default adminOrderSlice.reducer;