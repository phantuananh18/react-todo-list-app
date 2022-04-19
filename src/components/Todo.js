import React from 'react';
import { IconButton, ListItemText, Button, ButtonGroup } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';

const Todo = ({ todo, onDeleteTodo, onCompleteTodo }) => {

    return (
        <div className='todo'>
            <ListItemText>
                {todo.name}
                <IconButton onClick={() => onCompleteTodo(todo.id)} >
                    {todo.isCompleted ?
                        <DoneIcon color='error' /> :
                        <DoneIcon />
                    }
                </IconButton>
                <IconButton onClick={() => onDeleteTodo(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemText>
        </div>
    )
}

export default Todo;