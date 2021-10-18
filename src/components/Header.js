import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, currencies, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">{`Email:${email}`}</span>
        <span data-testid="total-field">{`Despesas: R$0.00 ${expenses}`}</span>
        <span data-testid="header-currency-field">{`BRL ${currencies} `}</span>
      </header>
    );
  }
}

Header.propTypes = PropTypes.objectOf(PropTypes.string).isRequired;

const mapStateToProps = ({ user, wallet }) => (
  {
    email: user.email,
    currencies: wallet.currencies,
    expenses: wallet.expenses,
  }
);

export default connect(mapStateToProps)(Header);