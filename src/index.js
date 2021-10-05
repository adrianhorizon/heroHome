import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { GlobalStyle } from './styles/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
