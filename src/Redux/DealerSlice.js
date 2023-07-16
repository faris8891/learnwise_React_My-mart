import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  profile: {},
  products: [],
  orders: [],
  ordersHistory: [],
};

const dealerSlice = createSlice({
  name: "dealers",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      const data = state;
      data.profile = action.payload;
    },
    setProducts: (state, action) => {
      const data = state;
      data.products = action.payload;
    },
    disableProducts: (state, action) => {
      const data = state.products.find(
        (e) => e._id == action.payload.productId
      );
      data.productActive = action.payload.productStatus;
    },
    unsetProduct: (state, action) => {
      const data = state;
      data.products = data.products.filter((e) => e._id != action.payload);
    },
    setOrders: (state, action) => {
      const data = state;
      data.orders = action.payload;
    },
    setOrdersHistory: (state, action) => {
      const data = state;
      data.ordersHistory = action.payload;
    },
  },
});

export const {
  setProducts,
  setProfile,
  disableProducts,
  setOrders,
  setOrdersHistory,
  unsetProduct,
} = dealerSlice.actions;
export default dealerSlice.reducer;
