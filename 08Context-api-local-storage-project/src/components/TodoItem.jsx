/* eslint-disable react/prop-types */
import { useState } from 'react';
import { UseTodo } from '../context';

function TodoItem({ todo }) {
  const [todoEditable, setTodoEditable] = useState(false); //! this state is used for checking todo is edit or not or updating todo state
  const [editText, setEditText] = useState(todo.todo); //! this state is used for edited text inside the input box
  const { updateTodo, toggleTodo, deleteTodo } = UseTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: editText }); //* in update we need todo item inside that and thats why we spred that
    setTodoEditable(false);
  };

  const toggleCheckTodo = () => {
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type='checkbox'
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCheckTodo}
      />
      <input
        type='text'
        className={`border outline-none w-full bg-transparent rounded-lg ${
          todoEditable ? 'border-black/10 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through' : ''}`}
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        readOnly={!todoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
          if (todo.completed) return;

          if (todoEditable) {
            editTodo();
          } else setTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {todoEditable ? '📁' : '✏️'}
      </button>
      {/* Delete Todo Button */}
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
