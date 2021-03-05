import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from "./store/redux";

import App from './App';

import './index.css';
import 'materialize-css/dist/css/materialize.min.css'

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)

ReactDOM.render(app,document.getElementById('root')
);

