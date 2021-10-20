import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalSumExpenses() {
    const { expenses } = this.props;
    const totalSum = expenses.reduce((acc, curr) => {
      acc += Number(curr.value) * curr.exchangeRates[curr.currency].ask;
      return acc;
    }, 0);
    return totalSum.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header className="header-wallet">
        <h1>TrybeWallet</h1>
        <section className="info-header-wallet">
          <p data-testid="email-field">{`Email:${email}`}</p>
          <section className="expense-header-wallet">
            <p data-testid="total-field">
              {`Despesas: R$ ${this.totalSumExpenses()}`}
            </p>
            <p data-testid="header-currency-field"> BRL</p>
          </section>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ user, wallet }) => (
  {
    email: user.email,
    currencies: wallet.currencies,
    expenses: wallet.expenses,
  }
);

export default connect(mapStateToProps)(Header);
