import { createStore, applyMiddleware } from 'redux';
    
function logActionMiddleware({ dispatch, getState }) {
    console.log('Enter logActionMiddleware');
    return function(next) {
        console.log('Function "next" provided:', next);
        let wrapperDispatch = function (action) {
            console.log('-> Action received:', action);
            let result = next(action);
            return result;
        }
        console.log('New wrapper dispatch:', wrapperDispatch);
        return wrapperDispatch;
    }
}

function logStateMiddleware({ dispatch, getState }) {
    console.log('Enter logStateMiddleware');
    return function(next) {
        console.log('Function "next" provided:', next);
        let wrapperDispatch = function (action) {
            let result = next(action);
            console.log('** Current State is:', getState());
            return result;
        }
        console.log('New wrapper dispatch:', wrapperDispatch);
        return wrapperDispatch;
    }
}


const finalCreateStore = applyMiddleware(logActionMiddleware, logStateMiddleware)(createStore)
let store = finalCreateStore(() => {});


