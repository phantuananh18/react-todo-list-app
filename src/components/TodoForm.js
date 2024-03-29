/** useState */
// import React from "react";
// import { Input, Button } from "@mui/material";
// import TodoList from "./TodoList";
// import "../App.css";

// const TodoForm = ({
//     onAddTodo,
//     onChangeTextInput,
//     onDeleteTodo,
//     onCompleteTodo,
//     todoList,
//     textInput,
// }) => {
//     return (
//         <div className="todo-form">
//             <Input
//                 autoFocus
//                 placeholder="Write a new task..."
//                 value={textInput}
//                 onChange={onChangeTextInput}
//             />
//             <Button
//                 variant="contained"
//                 color="success"
//                 style={{
//                     marginLeft: 10,
//                 }}
//                 disabled={!textInput}
//                 onClick={onAddTodo}
//             >
//                 Add a new task
//             </Button>

//             <div>
//                 <TodoList
//                     todoList={todoList}
//                     onDeleteTodo={onDeleteTodo}
//                     onCompleteTodo={onCompleteTodo}
//                 />
//             </div>
//         </div>
//     );
// };

// export default TodoForm;

/** apply redux */

// import React, { useState, useRef, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Input, Button } from '@mui/material';
// import TodoList from './TodoList';
// import { addTodo } from '../redux/actions/todoActions';

// const TodoForm = () => {
//     const todoList = useSelector(state => state.todo)
//     // console.log('todoLists: ', todoList);
//     const dispatch = useDispatch();
//     const [textInput, setTextInput] = useState('');

//     const onChangeTextInput = (event) => {
//         const value = event.target.value;
//         setTextInput(value);
//     }

//     const onAddTodo = () => {
//         dispatch(addTodo(textInput));
//         setTextInput('');
//     }

//     return (
//         <div>
//             <h1>Refractor redux todo list app</h1>
//             <Input
//                 placeholder='Write a new task'
//                 autoFocus={true}
//                 value={textInput}
//                 onChange={onChangeTextInput}
//             />
//             <Button
//                 variant='contained'
//                 color='primary'
//                 style={{
//                     marginLeft: 10,
//                 }}
//                 onClick={onAddTodo}
//             >
//                 Add a new task
//             </Button>
//             <TodoList todoList={todoList}></TodoList>
//         </div>
//     )
// }

// export default TodoForm;

/** apply ContextAPI */
import React, { useContext } from "react"
import { Input, Button } from "@mui/material"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import TodoContext from "../context/TodoContext"
import "../App.css"
import TodoList from "./TodoList"

const TodoForm = () => {
    const { textInput, todoList, onChangeTextInput, onAddTodo, inputRef } = useContext(TodoContext);

    return (
        <div className='App'>
            <h1>Refractor ContextAPI todo list app</h1>

            <Input
                placeholder='Write a new task'
                autoFocus={true}
                value={textInput}
                onChange={onChangeTextInput}
                inputRef={inputRef}
            />

            <Button
                variant='contained'
                color='primary'
                style={{
                    marginLeft: 10,
                }}
                onClick={() => onAddTodo()}

            >
                Add a new task
            </Button>

            <TodoList todoList={todoList} />
        </div>
      </Modal>

      <TodoList todoList={todoList} />
    </div>
  )
}

export default TodoForm
