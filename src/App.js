// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import { v4 } from 'uuid';
// import './App.css';
// import TodoForm from './components/TodoForm';

// const App = () => {
//   const [textInput, setTextInput] = useState(""); //empty string
//   const [todoList, setTodoList] = useState([]); //empty array

//   const onChangeTextInput = (event) => {
//     setTextInput(event.target.value);
//     // console.log(event.target.value);
//   }

//   const onAddTodo = () => {
//     setTodoList([
//       { id: v4(), name: textInput, isCompleted: false },
//       ...todoList
//     ])
//     setTextInput("");
//     // console.log(todoList);
//   }

//   const onRefresh = () => {
//     setTodoList([]);
//   }

//   const onDeleteTodo = (id) => {
//     const data = todoList.filter(todo => todo.id !== id);
//     setTodoList(data);
//     // console.log({ id, data });
//   }

//   const onCompleteTodo = (id) => {
//     const updateTodos = todoList.map(todo =>
//       todo.id === id ? { ...todo, isCompleted: true } : todo
//     )
//     setTodoList(updateTodos);
//   }
//   return (
//     <div className="App">
//       <h1>TO DO LIST</h1>
//       <TodoForm
//         todoList={todoList}
//         textInput={textInput}
//         onChangeTextInput={onChangeTextInput}
//         onAddTodo={onAddTodo}
//         onDeleteTodo={onDeleteTodo}
//         onCompleteTodo={onCompleteTodo}
//       />
//       <Button
//         variant='contained'
//         onClick={onRefresh}
//         color='primary'
//       >
//         Refresh
//       </Button>
//     </div>
//   );
// }

// export default App;

/** apply redux */
import React from 'react';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div>
      <TodoForm />
    </div>
  )
}

export default App;


