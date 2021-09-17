const appReducer = (state, {type, payload}) => {

    switch (type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, payload]
            }
        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter(t => t.id !== payload)
            }
        case 'UPDATE_TASK':
            const updateTask = payload
            const updateTasks = state.tasks.map(t => {
                if(t.id === updateTask.id) {
                    t.title = updateTask.title
                    t.description = updateTask.description
                    return t
                }
                return t
            })
            return {
                tasks: updateTasks
            }
        case 'TOGGLE_TASK':
            
            return {
                tasks: state.tasks.map(t => t.id === payload ? {...t, done: !t.done} : t)
            }
        default:
            return state;
    }
}

export default appReducer;