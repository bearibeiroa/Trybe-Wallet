export const LOGIN_USER_VALUE = 'LOGIN_USER_VALUE';
export const WALLET_VALUE = 'WALLET_VALUE';
export const WALLET_EXPENSES_VALUE = 'WALLET_EXPENSES_VALUE';

export const userLogin = (payload) => ({ type: 'LOGIN_USER_VALUE', payload });
export const walletValue = (payload) => ({ type: 'WALLET_VALUE', payload });
export const walletExpensesValue = (payload) => (
  {
    type: 'WALLET_EXPENSES_VALUE',
    payload,
  });
