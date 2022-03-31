import styled from 'styled-components';

const Container = styled.form`
  background: var(--bg-header);
  width: 100%;
  padding: 0.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1{
    font-size: 1rem;
    color: var(--text-title)
  }

  label {
    color: var(--text-title);
    margin-right: 5px;
  }

  input {
    height: 40px;
    max-width: 184px;
    margin-left: 5px;
  }

  select {
    height: 40px;
    margin-left: 5px;
    max-width: 184px;
  }

  button {
    background-color: var(--blue-btn);
    border: 1px solid var(--blue-btn);
    border-radius: 0.1rem;
    color: var(--text-title);
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
  }
`;

export default Container;
