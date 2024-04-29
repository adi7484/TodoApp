import React from 'react';
import TodoList from './Components/TodoList';  // Import TodoList from the correct path
import './App.css';  // Keep the App CSS import if you want to maintain styling
import DateTimeDisplay from './Components/DateTimeDisplay'; 

function App() {
  return (
    <div className="App">
    
    <DateTimeDisplay  />
      <TodoList />
    </div>
  );
}

export default App;
