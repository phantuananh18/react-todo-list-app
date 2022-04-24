// import React from 'react';
// import { IconButton, ListItemText, Button, ButtonGroup } from '@mui/material';
// import DoneIcon from '@mui/icons-material/Done';
// import DeleteIcon from '@mui/icons-material/Delete';
// import '../App.css';

// const Todo = ({ todo, onDeleteTodo, onCompleteTodo }) => {

//     return (
//         <div className='todo'>
//             <ListItemText>
//                 {todo.name}
//                 <IconButton onClick={() => onCompleteTodo(todo.id)} >
//                     {todo.isCompleted ?
//                         <DoneIcon color='error' /> :
//                         <DoneIcon />
//                     }
//                 </IconButton>
//                 <IconButton onClick={() => onDeleteTodo(todo.id)}>
//                     <DeleteIcon />
//                 </IconButton>
//             </ListItemText>
//         </div>
//     )
// }

// export default Todo;

/**apply redux */
// import React from 'react';
// import { IconButton, ListItemText } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { completeTodo, deleteTodo } from '../redux/actions/todoActions';
// import DoneIcon from '@mui/icons-material/Done';
// import DeleteIcon from '@mui/icons-material/Delete';
// import '../App.css';

// const Todo = ({ todo }) => {
//     // console.log('todo: ', todo);
//     const dispatch = useDispatch();

//     const onHandleDeleteTodo = () => {
//         dispatch(deleteTodo(todo.id))
//     }

//     const onHandleCompleteTodo = () => {
//         dispatch(completeTodo(todo.id))
//     }

//     return (
//         <div className='todo'>
//             <ListItemText>
//                 {todo.task}
//                 <IconButton onClick={onHandleCompleteTodo}>
//                     {todo.isCompleted ?
//                         <DoneIcon color='success' /> :
//                         <DoneIcon />
//                     }
//                 </IconButton>
//                 <IconButton onClick={onHandleDeleteTodo}>
//                     <DeleteIcon />
//                 </IconButton>
//             </ListItemText>
//         </div>
//     )
// }

// export default Todo;

/** apply ContextAPI */
import React from 'react';
import { IconButton, ListItemText } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo }) => {
    return (
        <div>
            <ListItemText>
                {todo.name}

                <IconButton>
                    {
                        todo.isCompleted ? <DoneIcon color='success' /> : <DoneIcon />
                    }
                </IconButton>

                <IconButton>
                    <DeleteIcon />
                </IconButton>

            </ListItemText>
        </div>
    )
}

export default Todo;