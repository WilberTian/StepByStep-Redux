/*
    actions
*/
const ADD_TASK = 'ADD_TASK';
const SELECT_CATEGORY = 'SELECT_CATEGORY';

function asyncAddTask(name, category) {
    return function(dispatch) {
        setTimeout(function() {
            dispatch({
                type: ADD_TASK,
                name,
                category
            });
        }, 2000);
    }
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
import { createStore, applyMiddleware } from 'redux'


var thunkMiddleware = function ({ dispatch, getState }) {
    // console.log('<> Enter thunkMiddleware');
    return function(next) {
        // console.log('<> Function "next" provided:', next);
        return function (action) {
            // console.log('<> Handling action:', action);
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}

const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore)

let store = finalCreateStore(taskApp);

console.log('initial state is:', store.getState());
console.log();


// add the subscribe method to monitor the store
let unsubscribe = store.subscribe(() => {
    console.log('State change to:', store.getState()); 
    console.log();    
});


store.dispatch(asyncAddTask('Write a blog', 'Writing'));
store.dispatch(asyncAddTask('Read ES6 spec', 'Reading'));
store.dispatch(selectCategory('Reading'));

setTimeout(() => {
    console.log('run unsubscribe after async action complete');
    unsubscribe();
}, 5000);

