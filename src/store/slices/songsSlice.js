import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

// STORE INTIIAL STATE - SLICES AUTOMATICALLY CREATE REDUCERS AND ACTION TYPES
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // action type = song/addSong
    addSong(state, action) {
      // state is not the big state object, just the state (songs) this reducer manages
      state.push(action.payload);
    },
    // action type = song/removeSong
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  // option 1. let songsSlice watch for movie/reset action type
  // option 2. let songsSlice watch for app/reset action type
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      // this resets the state of songs array
      console.log("songsSlice extraReducers");
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
//export default songsSlice.reducer;
export const songsReducer = songsSlice.reducer;
