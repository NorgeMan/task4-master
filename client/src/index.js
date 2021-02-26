import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {store} from "./reducers"
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
  document.getElementById('root')
);