import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mostPopular: [],
  series: [],
  comingSoon: [],
  similar: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMostPopular: (state, action) => {
      return {
        ...state,
        mostPopular: action.payload,
      };
    },
    setSeries: (state, action) => {
      return {
        ...state,
        series: action.payload,
      };
    },
    setComingSoon: (state, action) => {
      return {
        ...state,
        comingSoon: action.payload,
      };
    },
    setSimilar: (state, action) => {
      return {
        ...state,
        similar: action.payload,
      };
    },
  },
});

export const { setMostPopular, setSeries, setComingSoon, setSimilar } =
  moviesSlice.actions;

export default moviesSlice.reducer;
