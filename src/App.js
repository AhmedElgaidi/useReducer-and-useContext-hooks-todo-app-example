import React from 'react'

// Our components
import TodoInput from './widgets/input/TodoInput';
import TodoList from './components/todoList/TodoList';

// Import our context and wrapp by it the Switch
import TodoState from './context/todo/TodoState'

const App = () => {
  return (
    <div className='App'>
      <div className="app__todoApp">
        <TodoState>
          <TodoInput />
          <TodoList />
        </TodoState>
      </div>
    </div>
  )
}

export default App