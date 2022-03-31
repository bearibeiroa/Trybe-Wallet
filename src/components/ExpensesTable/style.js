import styled from 'styled-components';

const Container = styled.table `
  width: 100%;
  text-align: center;
  vertical-align: middle;
  border-spacing: 0 0.5rem;
  border-collapse: collapse;

  thead {
    width: 100%;
    background: var(--bg-thead);
    color:var(--text-title);
    font-weight: 500;
    border-top: 1px solid #e7e7e7;
  }

  th {
  padding: 0.5rem;
}

  td {
    background-color:#FFF;
    padding: 0.5rem;
    border-top: 1px solid #e7e7e7;
  }


  button {
    border: none;
    border-radius: 0.1rem;
    margin-right: 0.5rem;
    background-color: #FFF;
  }
`;

export default Container;