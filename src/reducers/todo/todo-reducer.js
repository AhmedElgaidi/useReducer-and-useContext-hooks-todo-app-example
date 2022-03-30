import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../../actions/todo/todo-actions";

const TodoReducer = (action, state) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state, action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    todo.id === action.payload.id ? {
                        ...todo,
                        complete: !todos.complete
                    } : todo
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    todo.id !== action.payload
                })
            }
        default:
            return state; 
    };
};

export default TodoReducer;