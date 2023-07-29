import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userId: "",
  profileImage: "",
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
  },
});
export const { setProfiles } = userSlice.actions;
export default userSlice.reducer;
