import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/MyNavbar.css'
import reportWebVitals from './reportWebVitals';
import MyNavbar from './Components/MyNavbar'

ReactDOM.render(
  <React.StrictMode>
    <MyNavbar image='' userName='RenieJr' nav1='Home' nav2='Gallery' nav3='About'></MyNavbar>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
