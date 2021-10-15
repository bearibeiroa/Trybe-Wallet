// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const LOGIN = 'LOGIN';

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { email: action.value };
  default:
    return state;
  }
};

export default userReducer;
