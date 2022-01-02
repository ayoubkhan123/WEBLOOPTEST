import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./Component/Header/Header";
import Cards from "./Component/Cards/Card";
import Mint from "./Component/Mintdata/Mint";
import Card from "./Component/carousalcard/Cards"
import Content from "./Component/maincontent/Content";
import Text from "./Component/shorttext/Text";
import Footer from "./Component/Footer/Footer";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Cards/>
    <Mint/>
    <Card/>
    <Content/>
    <Text/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
