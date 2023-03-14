/** useState */
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
// import React from 'react';
// import Todo from './Todo';
// import '../App.css'

// const TodoList = ({ todoList }) => {

//     return (
//         <div className='todo-list'>
//             {todoList.map(todo =>
//                 <Todo
//                     key={todo.id}
//                     todo={todo}
//                 />)}
//         </div>
//     )
// }

// export default TodoList;

/** apply contextAPI */
import React from 'react';
import Todo from './Todo';
import '../App.css';

const TodoList = ({ todoList }) => {
    return (
        <div className='todo-list'>
            {todoList.map(todo =>
                <Todo
                    key={todo.id}
                    todo={todo}
                />)}
        </div>
    )
}

export default TodoList;