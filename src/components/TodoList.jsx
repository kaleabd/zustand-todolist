import React from 'react'
import useTodoStore from '../store/TodoStore'
import deletebtn from '../assets/deletebtn.svg'

const TodoList = () => {
    const {todos, removeTodo} = useTodoStore(
        (state) => ({
            todos: state.todos,
            removeTodo: state.removeTodo
        })
    )
  return (
    <div className=''>
        <div>
            {todos.map((todo, id) => {
                return (
                    <div key={id} className="flex justify-between  mb-4 py-2 border-b-2 px-4">
                        <div>{todo?.title}</div>
                        
                            <img 
                            src={deletebtn}
                            alt="delete icon"
                            className='w-7 h-7'
                            onClick={
                                () => {
                                    removeTodo(todo.id)
                                }
                            }/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TodoList