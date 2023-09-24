import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

// CREATE AND CONFIGURE STORE
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// GET STATE
// console.log(JSON.stringify(store.getState()));

// WRITE STATE
// store.dispatch({ type: "song/addSong", payload: "song1" });
// store.dispatch(songsSlice.actions.addSong("song2"));
// console.log(JSON.stringify(store.getState()));

export { store, reset, addSong, removeSong, addMovie, removeMovie };
