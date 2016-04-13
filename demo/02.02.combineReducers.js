function tasks(state = [], action) {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('-> ADD_TASK Action');
            return [...state, {
                name: action.name,
                category: action.category
            }];
            
        default:
            return state;
    }
}    

function category(state = 'All', action) {
    switch (action.type) {
        case 'SELECT_CATEGORY':
            return action.category;
            
        default:
            return state;
    }
}       

import { combineReducers } from 'redux';
    
const taskApp = combineReducers({
    category,
    tasks
});


let newState = taskApp.tasks([], {
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

