import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import { deleteExpense } from '../../config/actions/index';
import Container from './style';

import trashIcon from '../../assets/trashIcon.svg';

class Table extends Component {
  handleClick = (id) => {
    const { removeExpense } = this.props;
    removeExpense(id);
  };

  render() {
    const { expenses } = this.props;
    return (
      <Container>
        <TableHead />
        <tbody>
          {expenses.map((item) => {
            const {
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            } = item;
            const exchangeRateInfo = Number(exchangeRates[currency].ask);
            const exchangeValue = Number(value) * exchangeRateInfo;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{exchangeRateInfo.toFixed(2)}</td>
                <td>{exchangeValue.toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button type="button" onClick={ () => this.handleClick(id) }>
                    <img src={ trashIcon } alt="Excluir" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Container>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(deleteExpense(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeExpense: PropTypes.func.isRequired,
};

Table.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
