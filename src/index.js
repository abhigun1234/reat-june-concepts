import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "jquery"
// import "popper.js/dist/umd/popper"
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import reportWebVitals from './reportWebVitals';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
