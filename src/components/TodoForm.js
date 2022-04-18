import React from 'react';
import { TextField, Button } from '@mui/material';
import TodoList from './TodoList';

import '../App.css'

const TodoForm = ({ onAddTodo, onChangeTextInput, todoList, textInput }) => {
    return (
        <div className='todo-form'>
            <TextField
                placeholder='Write a new task...'
                variant='standard'
                value={textInput}
                onChange={onChangeTextInput}
            />
            <Button
                variant='contained'
                color='success'
                style={{
                    marginLeft: 10,
                }}
                onClick={onAddTodo}
                disabled={!textInput}
            >
                Add a new task
            </Button>
            <div>
                <TodoList todoList={todoList} />
            </div>
        </div >
    )
}

export default TodoForm;