import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Checked from './pages/Checked';
import CheckEmail from './pages/CheckEmail';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import PerfilFoto from './pages/PerfilFoto';
import Register from './pages/Register';
import reportWebVitals from './reportWebVitals';
import Home from './routes/Routes';
import Routes from './routes/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
