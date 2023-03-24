import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
    <GlobalStyles />
  </>
  // </React.StrictMode>
);
