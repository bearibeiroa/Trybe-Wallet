import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import InputWallet from '../components/InputWallet';
import SelectWallet from '../components/SelectWallet';
import { fetchCurrency } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    const { dispatchWalletApi } = this.props;
    dispatchWalletApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value } = this.state;
    const { currencies } = this.props;
    const filterCurrency = currencies.filter((item) => item !== 'USDT');
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        <Header />
        <InputWallet
          label="valor"
          Legenda="Valor"
          type="text"
          name="Valor"
          value={ value }
          onChange={ this.handleChange }
        />
        <InputWallet
          label="description"
          Legenda="Descrição"
          type="text"
          name="Valor"
          value={ value }
          onChange={ this.handleChange }
        />
        <SelectWallet
          label="moeda"
          Legenda="Moeda"
          array={ filterCurrency }
        />
        <SelectWallet
          label="metodo"
          Legenda="Método de pagamento"
          array={ paymentMethod }
        />
        <SelectWallet
          label="tag"
          Legenda="Tag"
          array={ tags }
        />
      </>

    );
  }
}

Wallet.propTypes = {
  dispatchWalletApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchWalletApi: () => dispatch(fetchCurrency()),
}
);

const mapStateToProps = ({ wallet }) => (
  {
    currencies: wallet.currencies,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
