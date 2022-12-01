import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import { BrowserRouter } from 'react-router-dom'

console.log('%cWeatherApp', "color:red;padding:20px;background-color:gray;text-align:center;border-radius:5px")
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ),document.getElementById('root')
);