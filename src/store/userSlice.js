import { createSlice } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isOnboarded: false,
    loader: false,
    user: {},
  },
  reducers: userReducer,
});

export const profile = (state) => state.user;
export default userSlice.reducer;
export const { addUser, addItem, removeItem, changeItem, toggleIsDone } =
  userSlice.actions;
