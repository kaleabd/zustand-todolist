import create from "zustand";
import {devtools, persist} from 'zustand/middleware';

const todoStore = (set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({
      todos: [todo, ...state.todos]
    }));
  },
  removeTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.filter((c) => c.id !== todoId)
    }));
  },
/* The `toggleIsDone` function is a method of the `todoStore` object. It is used to toggle the `isDone`
property of a todo item in the `todos` array. */
  toggleIsDone: (todoId) => {
    set((state) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isDone: !todo.isDone
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
});


const useTodoStore = create(
    devtools(
        persist(todoStore, {
            name: "todos"
        })
    )
);

export default useTodoStore;
