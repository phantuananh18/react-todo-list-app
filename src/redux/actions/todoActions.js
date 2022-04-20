import { v4 } from 'uuid';

export const addTodo = (todo) => {
    // console.log('todo: ', todo);
    return {
        type: 'ADD_TODO',
        payload: { id: v4(), todo, isCompleted: false }
    }
}

export const deleteTodo = (id) => {
    // console.log('id: ', id);
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export const completeTodo = (id) => {
    return {
        type: 'COMPLETE_TODO',
        payload: id
    }
}

export const refreshTodo = () => {
    return {
        type: 'REFRESH_TODO',
    }
}
