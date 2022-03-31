import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableHead extends Component {
  render() {
    const headItems = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Excluir',
    ];
    return (
      <thead>
        <tr>
          {headItems.map((item, index) => <th key={ index }>{item}</th>)}
        </tr>
      </thead>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesInfo: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableHead);
