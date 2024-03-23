import { createSlice } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    isOnboarded: false,
    loader: false,
    user: {},
  },
  reducers: userReducer,
});

export const profile = (state) => state.userReducer.user;
export const isOnboarded = (state) => state.userReducer.isOnboarded;
export const userToken = (state) => state.userReducer.token;
export const loader = (state) => state.userReducer.loader;

export default userSlice.reducer;
export const {
  addUser,
  addItem,
  removeItem,
  changeItem,
  toggleIsDone,
  toggleIsOnboarded,
  cleareStore,
  toggleLoader,
} = userSlice.actions;
