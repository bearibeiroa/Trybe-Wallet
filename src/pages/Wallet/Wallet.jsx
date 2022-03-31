import React from 'react';
import HeaderWallet from '../../components/HeaderWallet/HeaderWallet';
import Table from '../../components/ExpensesTable/Table';
import ExpensesForm from '../../components/ExpensesForm/ExpensesForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <HeaderWallet />
        <ExpensesForm />
        <Table />
      </>
    );
  }
}

export default Wallet;
