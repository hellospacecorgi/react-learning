import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todoTasks",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      // assume payload is the new search term
      state.searchTerm = action.payload;
    },
    addTodoTask(state, action) {
      // assume payload is a new task object
      state.data.push({
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    removeTodoTask(state, action) {
      // assume payload is the id of the task to be removed

      // filter approach
      const updated = state.data.filter((task) => task.id !== action.payload);
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addTodoTask, removeTodoTask } =
  todosSlice.actions;
export const todosReducer = todosSlice.reducer;
