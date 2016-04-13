import { createStore } from 'redux';
    
var reducer = function(state = [], action) {
    console.log('-> Action Received:', action);
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

var store = createStore(reducer);

// use subscribe method of store object to add listeners
let unsubscribe = store.subscribe(() => {
    console.log('State change to:', store.getState()); 
    console.log();
});

// use getState method of store object to get current state
console.log('initial state is:', store.getState());
console.log();

// use dispatch method of store object to trigger action
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

// remove all the listeners
unsubscribe();
