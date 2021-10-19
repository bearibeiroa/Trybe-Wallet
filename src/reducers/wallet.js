// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_VALUE, WALLET_EXPENSES_VALUE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_VALUE:
    return { ...state, currencies: action.payload };
  case WALLET_EXPENSES_VALUE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
