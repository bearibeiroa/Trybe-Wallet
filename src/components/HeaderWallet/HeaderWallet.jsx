import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg';
import Container from './style';

class HeaderWallet extends React.Component {
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
      <Container>
        <Link to="/carteira">
          <img src={logoImg} alt="TrybeWallet" width="200"/>
        </Link>
        <ul>
          <li>{`Email:${email}`}</li>
          <li>{`Despesas: R$ ${this.totalSumExpenses()}`}BRL</li>
        </ul>
      </Container>
    );
  }
}

HeaderWallet.propTypes = {
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

export default connect(mapStateToProps)(HeaderWallet);
