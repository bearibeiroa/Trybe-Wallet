import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import persistState from 'redux-localstorage';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk), persistState()
    ),
);

export default store;