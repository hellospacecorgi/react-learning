import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import {
  todosReducer,
  addTodoTask,
  removeTodoTask,
  changeSearchTerm,
} from "./slices/todoSlice";
import {
  todoFormReducer,
  changeTitle,
  changeDescription,
} from "./slices/todoFormSlice";

import { reset } from "./actions";

// CREATE AND CONFIGURE STORE
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
    todoTasks: todosReducer,
    todoForm: todoFormReducer,
  },
});

// GET STATE
// console.log(JSON.stringify(store.getState()));

// WRITE STATE
// store.dispatch({ type: "song/addSong", payload: "song1" });
// store.dispatch(songsSlice.actions.addSong("song2"));
// console.log(JSON.stringify(store.getState()));

export { store, reset, addSong, removeSong, addMovie, removeMovie };
export {
  addTodoTask,
  removeTodoTask,
  changeSearchTerm,
  changeTitle,
  changeDescription,
};
