import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 200px auto;
  max-width: 576px;
  background: #FFF;
  padding: 5rem 4rem;
  border: 1px solid #C9C9C9;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 28px 8px rgba(0, 0, 0, 0.09);

  img {
    width: 70%;
    margin-bottom: 10%;
  }

  label {
    width: 100%;
    margin-bottom: 0.9rem;
  }

  input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: #F7F7F7;
      font-weight: 400;
      font-size: 0.9rem;
      &::placeholder {
        color: var(--text-body);
        font-size: 0.9rem;
        
      }
      & + input {
        margin-top: 1rem;
      }
    }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  button {
    width: 100%;
    padding: 0 1.1rem;
    height: 4rem;
    background: var(--green-btn);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 0.1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  `;

export default Container;
