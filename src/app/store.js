import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer/userSlice";
import moviesReducer from "./moviesReducer/moviesSlices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
