import React from 'react';
import Todo from './Todo';
import '../App.css';

const TodoList = ({ todoList, onDeleteTodo }) => {
    return (
        <div className='todo-list'>
            {todoList.map(todo =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                />)}
        </div>
    )
}



export default TodoList;