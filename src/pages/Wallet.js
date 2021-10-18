import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Email:
          {email}
        </span>
        <span data-testid="total-field">
          Despesas: R$0
          <span data-testid="header-currency-field"> BRL</span>
        </span>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => (
  {
    email: state.user.email,
  }
);

export default connect(mapStateToProps)(Wallet);
