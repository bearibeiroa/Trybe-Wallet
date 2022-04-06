import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import { render } from 'react-dom';

import { renderWithRouterAndStore } from './config';

const EMAIL = 'email-input';
const PASSWORD = 'password-input';

describe('1 - testa página de login', () => {
  test('testa se a rota desta página é \'/\'', () => {
    const { history } = renderWithRouterAndStore(<App />, '/');
    expect(history.location.pathname).toBe('/');
  });

  test('se existe um formulário de email e senha', () => {
    renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(EMAIL);
    const password = screen.getByTestId(PASSWORD);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test('se existe o botão de entrar e se iniciado desabilitado', () => {
    renderWithRouterAndStore(<App />, '/');
    const btn = screen.getByRole('button');

    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });

  test('as validações de email e senha', () => {
    renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(EMAIL);
    const password = screen.getByTestId(PASSWORD);
    const btn = screen.getByRole('button');

    userEvent.type(email, 'test');
    userEvent.type(password, '123456');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'test@');
    userEvent.type(password, '123456');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'test@mail.');
    userEvent.type(password, '123456');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'test@mail.com');
    userEvent.type(password, '1');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'test@mail.com');
    userEvent.type(password, '12');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'test@mail.com');
    userEvent.type(password, '123');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'test@mail.com');
    userEvent.type(password, '1234');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'test@mail.com');
    userEvent.type(password, '12345');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'test@mail.com');
    userEvent.type(password, '123456');
    expect(btn).toBeEnabled();
  });

  test('se o email é salvo no estado global da aplicação ao fazer login', () => {
    const { store } = renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(EMAIL);
    const password = screen.getByTestId(PASSWORD);
    const btn = screen.getByRole('button');

    userEvent.type(email, 'test@mail.com');
    userEvent.type(password, '123456');
    fireEvent.click(btn);

    expect(store.getState().user.email).toBe('test@mail.com');
  });

  test('se a rota é direcionada para /carteira/ após login', () => {
    const { history } = renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(EMAIL);
    const password = screen.getByTestId(PASSWORD);
    const btn = screen.getByRole('button');

    userEvent.type(email, 'test@mail.com');
    userEvent.type(password, '123456');
    fireEvent.click(btn);

    expect(history.location.pathname).toBe('/carteira');
  });

})
