// import React from 'react';
// import Todo from './Todo';
// import '../App.css';

// const TodoList = ({ todoList, onDeleteTodo, onCompleteTodo }) => {
//     return (
//         <div className='todo-list'>
//             {todoList.map(todo =>
//                 <Todo
//                     key={todo.id}
//                     todo={todo}
//                     onDeleteTodo={onDeleteTodo}
//                     onCompleteTodo={onCompleteTodo}
//                 />)}
//         </div>
//     )
// }

// export default TodoList;

/** apply redux */
import React, { useContext } from 'react';
import Todo from './Todo';
import '../App.css'
import { TodoContext } from '../context/TodoContext';

const TodoList = ({ todoList }) => {
    const { onDeleteTodo } = useContext(TodoContext);

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