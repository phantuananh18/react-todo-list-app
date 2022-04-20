const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: action.payload.id,
                    task: action.payload.todo,
                    isCompleted: action.payload.isCompleted,
                },
                ...state
            ]
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'COMPLETE_TODO':
            return state.map(todo =>
                todo.id === action.payload ?
                    { ...todo, isCompleted: true }
                    : todo
            )
        case 'REFRESH_TODO':
            return [];
        default:
            return state;
    }
}

export default TodoReducer;