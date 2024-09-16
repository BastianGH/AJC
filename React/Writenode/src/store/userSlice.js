import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    username: "",
  },
  reducers: {
    add(state, action) {
      const updatedUser = action.payload;
      console.log(updatedUser);
      return {
        ...state,
        token: updatedUser.token,
        username: updatedUser.username,
      };
    },
    remove(state, action) {
      const updatedUser = { token: "", username: "" };
      console.log(updatedUser);
      return { ...state, token: "", username: "" };
    },
  },
});

export const { add, remove } = userSlice.actions;
export const userReducer = userSlice.reducer;
