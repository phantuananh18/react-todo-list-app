// import React from 'react';
// import { Input, Button } from '@mui/material';
// import TodoList from './TodoList';
// import '../App.css';

// const TodoForm = ({ onAddTodo, onChangeTextInput, onDeleteTodo, onCompleteTodo, todoList, textInput }) => {

//     return (
//         <div className='todo-form'>
//             <Input
//                 autoFocus
//                 placeholder='Write a new task...'
//                 value={textInput}
//                 onChange={onChangeTextInput}
//             />
//             <Button
//                 variant='contained'
//                 color='success'
//                 style={{
//                     marginLeft: 10,
//                 }}
//                 onClick={onAddTodo}
//                 disabled={!textInput}
//             >
//                 Add a new task
//             </Button>
//             <div>
//                 <TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} onCompleteTodo={onCompleteTodo} />
//             </div>
//         </div >
//     )
// }

// export default TodoForm;

/** apply redux */
import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';

const TodoForm = () => {
    const todoList = useSelector(state => state.todo.isCompleted);
    console.log('TodoLists: ', todoList);
    return (
        <div>
            <h1>Refractor redux todo list app</h1>
            <TodoList></TodoList>
        </div>
    )
}

export default TodoForm;