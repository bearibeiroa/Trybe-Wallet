import { LOGIN_USER_VALUE } from '../actions';
import { defineState } from 'redux-localstore';

const DEFAULT_STATE = {
    email: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER_VALUE:
            return {...state, email: action.payload };
        default:
            return state;
    }
};

const INITIAL_STATE = defineState(DEFAULT_STATE)(userReducer);

export default userReducer;