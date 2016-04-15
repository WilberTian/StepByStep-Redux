import { createStore, applyMiddleware } from 'redux';
    
const initState = [];
var reducer = function (state = initState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                name: action.name,
                category: action.category
            }];
            
        default:
            return state;
    }
    
}


function logActionMiddleware({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            console.log('-> Action received:', action);
            let result = next(action);
            return result;
        }
    }
}

function logStateMiddleware({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            let result = next(action);
            console.log('** Current State is:', getState());
            return result;
        }
    }
}


const finalCreateStore = applyMiddleware(logActionMiddleware, logStateMiddleware)(createStore)
let store = finalCreateStore(reducer);


console.log('initial state is:', store.getState());

store.dispatch({
    type: 'ADD_TASK',
    name: 'Read ES6 spec',
    category: 'Reading'
});

store.dispatch({
    type: 'ADD_TASK',
    name: 'Write a blog',
    category: 'Writing'
});
