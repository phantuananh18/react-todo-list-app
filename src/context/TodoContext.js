import React, { useState, createContext, useRef } from 'react';
import { v4 } from 'uuid';

const TodoContext = createContext();

export const TodoContextProvider = (props) => {
    const [textInput, setTextInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const onOpenModal = () => {
        setIsOpen(true);
    }

    const onCloseModal = () => {
        setIsOpen(false);
    }

    const onChangeTextInput = (event) => {
        setTextInput(event.target.value);
    }

    const onRefreshTodoList = () => {
        setTodoList([]);
    }

    const onAddTodo = () => {
        setTodoList([{ id: v4(), name: textInput, isCompleted: false }, ...todoList]);
        setTextInput("");
        setIsOpen(false);
        inputRef.current.focus();
    }

    const onDeleteTodo = (id) => {
        const deleteTodo = todoList.filter(todo => todo.id !== id);
        setTodoList(deleteTodo);
    }

    const onCompleteTodo = (id) => {
        const completeTodo = todoList.map(todo => todo.id === id ?
            { ...todo, isCompleted: true } : todo);
        setTodoList(completeTodo);
    }

    const value = {
        textInput,
        todoList,
        inputRef,
        isOpen,
        onChangeTextInput,
        onAddTodo,
        onRefreshTodoList,
        onDeleteTodo,
        onCompleteTodo,
        onOpenModal,
        onCloseModal
    };

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContext;