import React, { useState, createContext, useRef } from "react";
import { v4 } from "uuid";
import { Modal } from "react-responsive-modal";

const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
    setTextInput("");
    inputRef.current.focus();
  };

  const handleDuplicateTodo = () => {
    const mapped = todoList.map((todo) => todo.name);
    const flag = mapped.includes(textInput); //method returns true or false if an array contains a specified value.
    if (!flag) {
      onAddTodo();
    } else {
      alert("The task is already");
      setIsOpen(false);
    }
    setTextInput("");
    inputRef.current.focus();
  };

  const onChangeTextInput = (event) => {
    setTextInput(event.target.value);
  };

  const onRefreshTodoList = () => {
    setTodoList([]);
  };

  const onAddTodo = () => {
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList,
    ]);
    setTextInput("");
    setIsOpen(false);
    inputRef.current.focus();
  };

  const onDeleteTodo = (id) => {
    const deleteTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(deleteTodo);
  };

  const onCompleteTodo = (id) => {
    const completeTodo = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setTodoList(completeTodo);
  };

  const value = {
    textInput,
    todoList,
    inputRef,
    isOpen,
    setTodoList,
    onChangeTextInput,
    onAddTodo,
    onRefreshTodoList,
    onDeleteTodo,
    onCompleteTodo,
    onOpenModal,
    onCloseModal,
    handleDuplicateTodo,
  };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContext;
