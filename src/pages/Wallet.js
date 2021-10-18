import React from 'react';
import Header from '../components/Header';
import InputWallet from '../components/InputWallet';
import SelectWallet from '../components/SelectWallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value } = this.state;
    const moedas = ['1'];
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
          array={ moedas }
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

export default Wallet;
