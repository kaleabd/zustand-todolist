import React from 'react';
import useTodoStore from '../store/TodoStore';
import deletebtn from '../assets/deletebtn.svg';

const TodoList = () => {
  const { todos, removeTodo, toggleIsDone } = useTodoStore((state) => ({
    todos: state.todos,
    removeTodo: state.removeTodo,
    toggleIsDone: state.toggleIsDone
  }));

  const handleCheckboxChange = (todoId) => {
    toggleIsDone(todoId);
  };

  return (
    <div className=''>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="flex justify-between  mb-4 py-2 border-b-2 px-4">
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <div className={todo.isDone ? 'line-through' : ''}>{todo.title}</div>
            <img
              src={deletebtn}
              alt="delete icon"
              className='w-7 h-7'
              onClick={() => {
                removeTodo(todo.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
