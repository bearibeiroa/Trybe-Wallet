import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectWallet extends Component {
  render() {
    const { label, array, Legenda } = this.props;
    return (
      <form>
        <label htmlFor={ label }>
          { Legenda }
          <select id={ label }>
            {array.map((item, index) => (
              <option key={ index } value={ item }>{item}</option>
            )) }
          </select>
        </label>
      </form>
    );
  }
}

SelectWallet.propTypes = {
  label: PropTypes.string.isRequired,
  Legenda: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SelectWallet;
