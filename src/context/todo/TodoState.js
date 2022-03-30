import React, { useReducer } from 'react';
import TodoContext from './todo-context';
import TodoReducer from '../../reducers/todo/todo-reducer';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../../actions/todo/todo-actions";


const TodoState = props => {
    const initalState = {
        todos: [{ id: 23423, text: 'sfsdf', complete: true }] //{id: 123, text: 'watch TV', complete: false}
    }
    const [state, dispatch] = useReducer(TodoReducer, initalState);

    // our handlers (our dispatch functions)
    // (1) Add todo
    const addTodo = todo => {
        dispatch({
            type: ADD_TODO,
            payload: todo// coming from input
        })
    };
    // (2) Toggle todo
    const toggleTodo = todoId => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoId
        })
    };
    // (3) Delete todo
    const deleteTodo = todoId => {
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        })  
    };


    return (
    <TodoContext.Provider 
        className='TodoState'
        value={{
            todos: state.todos,
            addTodo,
            toggleTodo,
            deleteTodo
        }}
    >
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState