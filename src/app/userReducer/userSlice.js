import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  loggedUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setPass: (state, action) => {
      return {
        ...state,
        password: action.payload,
      };
    },
    setLoggedUser: (state, action) => {
      return {
        ...state,
        loggedUser: action.payload,
      };
    },
  },
});

export const { setEmail, setPass, setLoggedUser } = userSlice.actions;

export default userSlice.reducer;
