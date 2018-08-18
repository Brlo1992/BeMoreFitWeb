import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import { createStore } from 'redux';
import combineReducers from './Reducers.js';
import Root from './Root.js';
const Store = createStore(combineReducers);

console.log(Store.getState());
ReactDOM.render(<Root store={Store} />,
    document.getElementById('root'));
registerServiceWorker();
