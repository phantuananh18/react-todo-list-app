import React, { useState } from 'react';
import { Button } from '@mui/material';
import { v4 } from 'uuid';
import './App.css';
import TodoForm from './components/TodoForm';


function App() {
  const [textInput, setTextInput] = useState(""); //empty string
  const [todoList, setTodoList] = useState([]); //empty array

  const onChangeTextInput = (event) => {
    setTextInput(event.target.value);
    console.log(event.target.value);
  }

  const onAddTodo = () => {
    setTodoList([
      ...todoList,
      { id: v4(), name: textInput, isCompleted: false }
    ])
    setTextInput("");
    console.log(todoList);
  }

  const onRefresh = () => {
    setTodoList([]);
  }
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <TodoForm
        todoList={todoList}
        textInput={textInput}
        onChangeTextInput={onChangeTextInput}
        onAddTodo={onAddTodo}
      />
      <Button
        variant='contained'
        onClick={onRefresh}
        color='primary'
      >
        Refresh
      </Button>
    </div>
  );
}

export default App;
