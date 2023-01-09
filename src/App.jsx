import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



export default function App() {
    return ( 
      <div className='flex justify-center items-center my-20'>
        <div className='flex flex-col gap-6'>
          <TodoForm/>
          <TodoList/>
        </div>
        
      </div>
    )

}
