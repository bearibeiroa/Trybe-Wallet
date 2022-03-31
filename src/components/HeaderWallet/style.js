import styled from 'styled-components';

const Container = styled.header`
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

  @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px) {
  flex-direction: column;
  width: auto;
  ul {
    display: flex;
    flex-direction: column;
  }
}
`;

export default Container;
