import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/MyNavbar.css'
import './Components/MyFooter.css'
import './Components/Welcome.css'
import './Components/Home.css'
import reportWebVitals from './reportWebVitals';
import MyNavbar from './Components/MyNavbar'
import MyFooter from './Components/MyFooter'
import Home from './Components/Home'
import Welcome from './Components/Welcome'

ReactDOM.render(
  <React.StrictMode>
    <MyNavbar image='' userName='RenieJr' nav1='Fantasy' ref1='fantasy.html' nav2='History' ref2='#' nav3='Horror' ref3='#' nav4='Romance' ref4='#' nav5='Sci-Fi' ref5='#'></MyNavbar>
    <Welcome title='Best Books Only For You' message='We have only 5 categories sorry'/>
    <Home>
    </Home>
    <MyFooter></MyFooter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
