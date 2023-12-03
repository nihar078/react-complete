import { createSlice } from "@reduxjs/toolkit";

const localState =  JSON.parse(localStorage.getItem("tokenData"))
const initialAuthState = {
  token: localState ? localState.token : "",
  email: localState ? localState.email : "",
  isLoggedIn: !!localState.token
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      // console.log(action.payload)
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      localStorage.setItem("tokenData", JSON.stringify(action.payload))
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = "";
      state.email = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
