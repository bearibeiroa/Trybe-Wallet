import { WALLET_VALUE, WALLET_EXPENSES_VALUE, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// This reducer is responsible for handling all expense-related information

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_VALUE:
    return { ...state, currencies: action.payload };
  case WALLET_EXPENSES_VALUE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter(
        (item) => item.id !== action.payload,
      )],
    };
  default:
    return state;
  }
};

export default walletReducer;
