import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './i18n';
import i18next from 'i18next';
import { getDataFromLocalStorage } from './helpers/getLocalStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const lang = getDataFromLocalStorage('lang');
i18next.changeLanguage(lang);

store.subscribe(()=>{
  localStorage.setItem('cart', JSON.stringify(store.getState().cart.cart))
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
