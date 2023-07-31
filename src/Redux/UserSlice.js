import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userId: "",
  profileImage: "",
  login:""
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
      const data = state
      data.login=action.payload
    }
  },
});
export const { setProfiles ,setLogin} = userSlice.actions;
export default userSlice.reducer;
