import styled from 'styled-components';

const Container = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  font-size: 1rem;
  background: var(--shape);

  ul {
    display: flex;
    list-style: none;
  }

  li {
    color: var(--text-body);
    margin-right: 1.5rem;
    font-weight: 500;
  }
`;

export default Container;