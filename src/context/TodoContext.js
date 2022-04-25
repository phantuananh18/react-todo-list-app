import React, { useState, createContext, useRef } from 'react';
import { v4 } from 'uuid';

const TodoContext = createContext();

export const TodoContextProvider = (props) => {
    const [textInput, setTextInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();

    const onChangeTextInput = (event) => {
        setTextInput(event.target.value);
    }

    const onRefreshTodoList = () => {
        setTodoList([]);
    }

    const onAddTodo = () => {
        setTodoList([{ id: v4(), name: textInput, isCompleted: false }, ...todoList]);
        setTextInput("");
        inputRef.current.focus();
    }

    const onDeleteTodo = (id) => {
        const deleteTodo = todoList.filter(todo => todo.id !== id);
        setTodoList(deleteTodo);
        console.log('delte: ', deleteTodo);
    }

    const onCompleteTodo = (id) => {
        const completeTodo = todoList.map(todo => todo.id === id ?
            { ...todo, isCompleted: true } : todo);
        setTodoList(completeTodo);
        console.log(completeTodo);
    }

    const value = {
        textInput,
        setTextInput,
        todoList,
        setTodoList,
        inputRef,
        onChangeTextInput,
        onAddTodo,
        onRefreshTodoList,
        onDeleteTodo,
        onCompleteTodo
    };

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContext;