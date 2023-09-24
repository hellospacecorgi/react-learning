import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

// STORE INTIIAL STATE - SLICES AUTOMATICALLY CREATE REDUCERS AND ACTION TYPES
const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    // action type = song/addMovie
    addMovie(state, action) {
      state.push(action.payload);
    },
    // action type = song/removeMovie
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  // reset(state, action) {
  //   // this reset the state for movies array
  //   return [];
  // },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      // this resets the state of movies array
      console.log("moviesSlice extraReducers");
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
