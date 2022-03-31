import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
:root {
  --shape: #F0F2F5;
  --bg-header: #262B33;
  --bg-thead: #31393E;

  --blue-btn: #2427F0;
  --green-btn: #3EA378;
  --yellow-btn: #F5C344;
  --red-btn:#E71919;

  --dark-green: #14684E;

  --text-title: #FFF;
  --text-body: #31393E;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (media-width:1080px) {
    font-size: 93.75%;
  }

  @media (media-width:720px) {
    font-size: 87.5%;
  }
}

body {
    background: var(--shape);
    -webkit-font-smoothing: antialiased;
  }

body, input, button {
    font-family: 'Museo Sans', sans-serif;
    font-weight: 400;
  }

button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default GlobalStyle;