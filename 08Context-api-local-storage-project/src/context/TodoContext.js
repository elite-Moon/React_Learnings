import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'todo msg',
      completed: false,
    },
  ],
  //! here we write only funtion but not functionality
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {},
});

export const UseTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
