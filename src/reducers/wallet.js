// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const WALLET = 'WALLET';

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, [action.name]: action.payload };
  default:
    return state;
  }
};

export default walletReducer;
