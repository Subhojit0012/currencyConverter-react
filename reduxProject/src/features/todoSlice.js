import { createReducer, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello!" }],
};

export const todoSlice = createReducer({
  name: "todo",
  initialState,
  reducer: {
    addItem: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeItem: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
  },
});

export const { addItem, removeItem } = todoSlice.actions;

export default todoSlice.reducer;
