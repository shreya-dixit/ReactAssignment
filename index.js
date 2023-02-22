import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppProvider } from './features/ContextAPI/UserContext';

const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <AppProvider>
        <App />
        </AppProvider>
      </Provider>
    </BrowserRouter>
);
