import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './client/app.js';

ReactDom.render(<App />, document.getElementById("main"));