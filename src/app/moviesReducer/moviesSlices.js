import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mostPopular: [],
  series: [],
  inTheaters: [],
  similar: [],
  topTen: [],
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
    setInTheaters: (state, action) => {
      return {
        ...state,
        inTheaters: action.payload,
      };
    },
    setSimilar: (state, action) => {
      return {
        ...state,
        similar: action.payload,
      };
    },
    setTopTen: (state, action) => {
      return {
        ...state,
        topTen: action.payload,
      };
    },
  },
});

export const {
  setMostPopular,
  setSeries,
  setInTheaters,
  setSimilar,
  setTopTen,
} = moviesSlice.actions;

export default moviesSlice.reducer;
