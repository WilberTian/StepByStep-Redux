/*
    actions
*/
const ADD_TASK = 'ADD_TASK';
const SELECT_CATEGORY = 'SELECT_CATEGORY';

function addTask(name, category) {
    return {
        type: ADD_TASK,
        name,
        category
    };
}

function selectCategory(category) {
    return {
        type: SELECT_CATEGORY,
        category
    };
}


/*
    reducers
*/
function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
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
        case SELECT_CATEGORY:
            console.log('-> SELECT_CATEGORY Action');
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


/*
    store
*/    
import { createStore } from 'redux'

let store = createStore(taskApp);

console.log('initial state is:', store.getState());
console.log();


// add the subscribe method to monitor the store
let unsubscribe = store.subscribe(() => {
    console.log('State change to:', store.getState()); 
    console.log();    
});


store.dispatch(addTask('Write a blog', 'Writing'));
store.dispatch(addTask('Read ES6 spec', 'Reading'));
store.dispatch(selectCategory('Reading'));


unsubscribe()