import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk), persistState(),
  ),
);

export default store;
