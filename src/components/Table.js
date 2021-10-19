import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHead from './TableHead';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <>
        <TableHead />
        <table>
          <tbody>
            { expenses.map((item) => {
              const {
                id, description, tag, method, value, currency, exchangeRates,
              } = item;
              const exchangeRateInfo = Number(exchangeRates[currency].ask);
              const exchangeValue = Number(value) * exchangeRateInfo;
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ exchangeRates[currency].name }</td>
                  <td>{ exchangeRateInfo.toFixed(2) }</td>
                  <td>{ exchangeValue.toFixed(2) }</td>
                  <td>Real</td>
                  <td>
                    <button type="button">Editar</button>
                    <button type="button">Excluir</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps)(Table);
