import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoITem';
import TodoForm from './TodoForm';
import './TodoList.css'; // Import the CSS file

axios.defaults.baseURL = 'http://localhost:8080/todos';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('/')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    const addTodo = (newTodo) => {
        axios.post('/', newTodo)
            .then(response => setTodos([...todos, response.data]))
            .catch(error => console.error(error));
    };

    const updateTodo = (id, updatedTodo) => {
        axios.put(`/${id}`, updatedTodo)
            .then(response => {
                const updatedTodos = todos.map(todo => {
                    if (todo.id === id) {
                        return response.data;
                    }
                    return todo;
                });
                setTodos(updatedTodos);
            })
            .catch(error => console.error(error));
    };

    const deleteTodo = (id) => {
        axios.delete(`/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="todo-container"> {/* Add the CSS class for the container */}
            <h2 className="todo-heading">Hi have a productive day :) ?</h2> {/* Add the CSS class for the heading */}
            <TodoForm addTodo={addTodo} className="todo-form" /> {/* Add the CSS class for the form */}
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                        className="todo-item" /* Add the CSS class for each To-Do item */
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
