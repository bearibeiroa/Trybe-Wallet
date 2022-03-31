import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Login from '../pages/Login/Login';
import { render } from 'react-dom';

describe('1 - testa página de login', () => {
  test('se existe um formulário na página de login', () => {
    render(<Login />);
    const email= screen.getByPlaceholderText(/Email/i);
    expect(email).toBeInTheDocument();
  })
})
