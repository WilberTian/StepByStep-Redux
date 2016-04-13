const initialState = {
    taskCategory: 'All',
    tasks: []
};

function taskApp(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CATEGORY':
            return Object.assign({}, state, {
                taskCategory: action.category
            });
            
        case 'ADD_TASK':
            console.log('-> ADD_TASK Action');
            return Object.assign({}, state, {
                tasks: [...state.tasks, {
                    name: action.name,
                    category: action.category
                }]
            });
            
        default:
            return state;
    }
}


let newState = taskApp(initialState, {
    type: 'ADD_TASK',
    name: 'Write a blog',
    category: 'Writing'
});
console.log(newState);


newState = taskApp(newState, {
    type: 'ADD_TASK',
    name: 'Read ES6 spec',
    category: 'Reading'
});
console.log(newState);

