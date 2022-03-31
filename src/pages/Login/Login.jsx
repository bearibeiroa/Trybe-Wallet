import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logoImg from '../../assets/logo.svg';
import { userLogin } from '../../config/actions/index';
import Container from './styles';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = () => {
    const { email } = this.state;
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  validateButton = () => {
    const { email, password } = this.state;
    // Solução desenvolvida com auxílio dos alunos Michael Caxias e Luiz Gustavo.
    // Ref: https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation

    const LENGTH_PASSWORD = 6;
    const checkEmailInput = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const checkPass = password.length < LENGTH_PASSWORD;

    return !checkEmailInput.test(email) || checkPass;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <img src={ logoImg } alt="Logo TrybeWallet" />
        <label htmlFor="email">
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            placeholder="Senha"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ this.validateButton() }
          onClick={ this.onSubmit }
        >
          Entrar
        </button>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (userEmail) => dispatch(userLogin(userEmail)),
}
);

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
