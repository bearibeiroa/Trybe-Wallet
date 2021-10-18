import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputWallet extends Component {
  render() {
    const { label, Legenda, name, value, onChange } = this.props;
    return (
      <form>
        <label htmlFor={ label }>
          {Legenda}
          <input
            id={ label }
            type="text"
            name={ name }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </form>
    );
  }
}

InputWallet.propTypes = {
  label: PropTypes.string.isRequired,
  Legenda: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWallet;
