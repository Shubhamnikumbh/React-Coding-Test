import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  state: "idle"
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts (state,action){
    //     state.data = action.payload ;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  }
});

export const { add, remove } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://dummyjson.com/products");
  const result = data.json();
  return result;
});
