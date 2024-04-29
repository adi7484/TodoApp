import React, { useState } from 'react';
import './TodoForm.css'; // Import the CSS file

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim()) {
            addTodo({ title, completed: false });
            setTitle('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new to-do"
            />
            <button type="submit" className="todo-button"> 
                Add
            </button>
        </form>
    );
}

export default TodoForm;
