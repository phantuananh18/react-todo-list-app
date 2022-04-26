/** useState */
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { v4 } from 'uuid';
import './App.css';
import TodoForm from './components/TodoForm';

const App = () => {
  const [textInput, setTextInput] = useState(""); //empty string
  const [todoList, setTodoList] = useState([]); //empty array


  const storageKey = 'todo-list-app';

  useEffect(() => {
    const storageTodoList = localStorage.getItem(storageKey);
    if (storageTodoList) {
      setTodoList(JSON.parse(storageTodoList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todoList));
  }, [todoList])

  const onChangeTextInput = (event) => {
    setTextInput(event.target.value);
    // console.log(event.target.value);
  }

  const onAddTodo = () => {
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList
    ])
    setTextInput("");
  }

  const onRefresh = () => {
    setTodoList([]);
  }

  const onDeleteTodo = (id) => {
    const data = todoList.filter(todo => todo.id !== id);
    setTodoList(data);
    // console.log({ id, data });
  }

  const onCompleteTodo = (id) => {
    const updateTodos = todoList.map(todo =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    )
    setTodoList(updateTodos);
  }
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <TodoForm
        todoList={todoList}
        textInput={textInput}
        onChangeTextInput={onChangeTextInput}
        onAddTodo={onAddTodo}
        onDeleteTodo={onDeleteTodo}
        onCompleteTodo={onCompleteTodo}
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

/** apply redux */
// import React from 'react';
// import { Button } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { refreshTodo } from './redux/actions/todoActions';
// import './App.css';
// import TodoForm from './components/TodoForm';

// const App = () => {
//   const dispatch = useDispatch();
//   const onHandleRefresh = () => {
//     dispatch(refreshTodo());
//   }

//   return (
//     <div className='App'>
//       <TodoForm />
//       <Button
//         variant='contained'
//         color='primary'
//         onClick={onHandleRefresh}
//       >
//         Refresh
//       </Button>
//     </div>
//   )
// }

// export default App;


/** apply ContextAPI */
// import React, { useContext } from 'react';
// import { Button } from '@mui/material';
// import TodoForm from './components/TodoForm';
// import TodoContext from './context/TodoContext';
// import './App.css'

// const App = () => {
//   const { onRefreshTodoList } = useContext(TodoContext);

//   return (
//     <div className='App'>
//       <TodoForm />
//       <Button variant='contained' onClick={onRefreshTodoList}>Refresh</Button>
//     </div>
//   )
// }

// export default App;
