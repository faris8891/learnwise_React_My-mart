import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userId: "",
  profileImage: "",
  login: "",
  latestShops: [],
  shops:[]
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setProfiles: (state, action) => {
      const data = state;
      data.userId = action.payload._id;
      data.profileImage = action.payload.profileImage;
      data.cartLength = action.payload.cartLength;
    },
    setLogin: (state, action) => {
      const data = state;
      data.login = action.payload;
    },
    setShops: (state, action)=>{
      const data = state
      data.shops=action.payload
    },
    setLatestShops: (state, action) => {
      const data = state;
      data.latestShops = action.payload;
    },
  },
});
export const { setProfiles, setLogin, setLatestShops,setShops } = userSlice.actions;
export default userSlice.reducer;
