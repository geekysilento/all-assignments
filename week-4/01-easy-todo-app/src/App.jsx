import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function useTodos(dependencies) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    fetchTodos();
  }, dependencies);

  return todos;
}

function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const todos = useTodos([title, desc]);

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDesc(event.target.value);
  };

  const sendTodo = async event => {
    event.preventDefault();
    // const response = await fetch('http://localhost:3000/todos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title,
    //     desc,
    //   }),
    // });

    // if (response.ok) {
    //   // Clear input fields after submitting
    //   setTitle('');
    //   setDesc('');
    // } else {
    //   console.log(response.statusText);
    // }
  };

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <form onSubmit={sendTodo}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
          <br />
          <label htmlFor="description">Todo description:</label>
          <input type="text" id="description" value={desc} onChange={handleDescriptionChange} />
          <br />
          <button type="submit">Add Todo</button>
        </form>

        {todos.map(todo => (
          <div key={todo.id}>
            {todo.title + ": " + todo.desc}
          </div>
        ))}
      </div>
    </>
  );
}


export default App;
