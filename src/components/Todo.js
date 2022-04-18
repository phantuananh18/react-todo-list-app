import React from 'react';
import { IconButton, ListItemText } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';

const Todo = ({ todo }) => {
    return (
        <div className='todo'>
            <ListItemText>
                {todo.name}
                <IconButton>
                    <DoneIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </ListItemText>
        </div>
    )
}

export default Todo;