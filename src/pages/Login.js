import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="login">
          TrybeWallet
          <input type="email" name="email" data-testid="email-input" />
          <input type="text" name="senha" data-testid="password-input" />
          <button type="button">Entrar</button>
        </label>
      </form>
    );
  }
}

export default Login;
