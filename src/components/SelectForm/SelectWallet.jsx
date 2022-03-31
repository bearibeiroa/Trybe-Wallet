import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectForm extends Component {
  render() {
    const { options, label, id, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select name={ id } id={ id } value={ value } onChange={ onChange }>
          {options.map((item) => (
            <option key={ item }>{item}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectForm.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SelectForm;
