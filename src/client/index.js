//Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import '../sass/index.scss';

const appHookHTML = document.getElementById("app");
ReactDOM.hydrate(<Home/>, appHookHTML);