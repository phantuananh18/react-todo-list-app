const initialState = {
    todoList: [],
    isCompleted: false,
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state;
        case 'DELETE_TODO':
            return state;
        case 'COMPLETE_TODO':
            return state;
        default:
            return state;
    }
}

export default TodoReducer;