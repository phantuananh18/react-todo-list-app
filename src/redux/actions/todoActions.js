export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}

export const completeTodo = (todo) => {
    return {
        type: 'COMPLETE_TODO',
        payload: todo
    }
}
