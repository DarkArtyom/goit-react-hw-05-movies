import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { GlobalStyles } from './Styles/GlobalStyles.jsx';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      {/* <BrowserRouter> */}
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
