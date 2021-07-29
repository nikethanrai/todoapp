
import './App.css';
import Form from './components/form'
import TodoList from './components/Todolist';
import React, { useState, useEffect } from 'react';


function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break


    }
  }
  return (

    <div className="App">
      <header><h1>TodoList</h1>
        <Form todos={todos}  setStatus={setStatus} inputText={inputText} setTodos={setTodos} setInputText={setInputText} />
        <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />

      </header>

    </div>

  );
}

export default App;
