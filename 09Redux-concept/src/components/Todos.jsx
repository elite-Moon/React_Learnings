import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../featuresSlice/todo/todoSlice';

function Todos() {
  useSelector((state) => state.todos);
  //* to select the value with the help
  const todosList = useSelector((state) => state.todos); //! here we use direct arrow fnc bcoz we have single parameter and in useSelector syntax we have access of state from slice and here we take state value from initialState which is gone by pushing the values by reducer
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos Items</div>

      <ul className='list-none'>
        {todosList.map((todo) => (
          <li
            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
