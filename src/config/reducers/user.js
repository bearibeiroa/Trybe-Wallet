import { defineState } from 'redux-localstore';
import { LOGIN_USER_VALUE } from '../actions';

const INITIAL_STATE = {
  email: '',
};

// This reducer is responsible for handling the user information

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER_VALUE:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

defineState(INITIAL_STATE)(userReducer);

export default userReducer;
