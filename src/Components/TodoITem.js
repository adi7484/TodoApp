import React from 'react';
import './TodoItem.css'; // Import the CSS file

function TodoItem({ todo, updateTodo, deleteTodo }) {
    const handleToggleComplete = () => {
        updateTodo(todo.id, { ...todo, completed: !todo.completed });
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleComplete}
            />
            <span className="todo-item-text">
                {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;
