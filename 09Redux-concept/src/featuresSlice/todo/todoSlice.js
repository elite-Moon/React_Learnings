//! here we do  2nd step for making reducer that is called slice

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'hello redux' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    //! payload is itself a object
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //! for removing we have to remove from existing initial state bcoz data is stored inside the intial state
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
