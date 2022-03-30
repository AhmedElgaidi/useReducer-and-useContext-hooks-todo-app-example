import React from "react";
import styles from "./TodoItem.css";

const TodoItem = ({ text, clickToToggle, clickToDelete, complete }) => {
  return (
    <div className="TodoItem">
        <div className={styles.todoItem}>
            <span
                className={styles.todoItem__text}
                style={{ color: complete ? "green" : "red" }}
            >
                {text}
            </span>
            <div>
                <button className={styles.todoItem__toggleBtn} onClick={clickToToggle}>
                    TOGGLE
                </button>
                <button className={styles.todoItem__deleteBtn} onClick={clickToDelete}>
                    DELETE
                </button>
            </div>
        </div>
    </div>
  )
}

export default TodoItem