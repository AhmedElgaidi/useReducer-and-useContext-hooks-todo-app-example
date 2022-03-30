import React, { useState, useContext } from "react";
import styles from "./TodoInput.css";

import TodoContext from "../../context/todo/todo-context";


const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const { addTodo } = useContext(TodoContext);

    const onChangeHandler = e => {
        setTodo(e.target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        // {id: 111, text: 'Some text', complete: false}
        const newTodo = {
            id: Math.random(),
            text: todo,
            complete: false,
        };
        addTodo(newTodo);
        setTodo("");
    };



  return (
    <div className="TodoInput">
         <div className={styles.todoInput}>
            <h3 className={styles.todoInput__title}>
                useContext and useRecder | Todo app
            </h3>
            <form 
                onSubmit={onSubmitHandler} 
                className={styles.todoInput__form}
            >
                <input
                    className={styles.todoInput__input}
                    type="text"
                    value={todo}
                    placeholder="Enter a Todo..."
                    onChange={onChangeHandler}
                />
                <button className={styles.todoInput__submitBtn}>ADD</button>
            </form>
        </div>
    </div>
  );
}

export default TodoInput