import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`


// Async Thunk to Fetch All Products (Admin)
export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchAdminProducts",
  async () => {
    const response = await axios.get(`${API_URL}/api/admin/products`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  }
);


// Add the create product action
export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/admin/products`,
        productData,
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
  }
);

// Update existing Product info
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `${API_URL}/api/admin/products/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return response.data;
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id) => {
    await axios.delete(`${API_URL}/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return id;
  }
);

// Add Product (Admin)
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/admin/products`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const adminProductsSlice = createSlice({
    name: "adminProducts",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchAdminProducts.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchAdminProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(fetchAdminProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(createProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
          })
          .addCase(updateProduct.fulfilled, (state, action) => {
            const index = state.products.findIndex(
              (product) => product._id === updateProduct._id
            );
            if (index !== -1) {
              state.products[index] = action.payload;
            }
          })
          .addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = state.products.filter(
              (product) => product._id !== action.payload
            );
          })
          .addCase(addProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
          })
          .addCase(addProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || action.error.message;
          });
         
    }
});

export default adminProductsSlice.reducer;