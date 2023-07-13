import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  profile: {},
  products: [],
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
  },
});

export const { setProducts, setProfile } = dealerSlice.actions;
export default dealerSlice.reducer;
