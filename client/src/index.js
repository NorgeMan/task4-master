import ReactDOM from 'react-dom';
import App from './components/App';
import {store} from "./reducers"
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import './i18n';
import {createTheme} from "react-dark-theme";
import React from "react";


const lightTheme = {
    background: 'white',
    text: 'black',
}

const darkTheme = {
    background: 'black',
    text: 'white',
}

const myTheme = createTheme(darkTheme, lightTheme)

ReactDOM.render(
    <Provider store={store}>
        <div style={{backgroundColor: myTheme.background, color: myTheme.text}}>
            <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);