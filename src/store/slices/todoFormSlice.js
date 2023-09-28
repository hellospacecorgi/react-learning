import { createSlice } from "@reduxjs/toolkit";
import { addTodoTask } from "./todoSlice";

const todoFormSlice = createSlice({
  name: "todoForm",
  initialState: {
    title: "",
    description: "",
  },
  reducers: {
    changeTitle(state, action) {
      // assume payload is the new title
      state.title = action.payload;
    },
    changeDescription(state, action) {
      // assume payload is the new description
      state.description = action.payload;
    },
  },
  extraReducers(builder) {
    // addTodoTask == 'todoTasks/addTodoTask' action type
    builder.addCase(addTodoTask, (state, action) => {
      state.title = "";
      state.description = "";
    });
  },
});

export const { changeTitle, changeDescription } = todoFormSlice.actions;
export const todoFormReducer = todoFormSlice.reducer;
