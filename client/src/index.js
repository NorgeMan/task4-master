import ReactDOM from 'react-dom';
import App from './components/App';
import {store} from "./reducers"
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import './i18n';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
  document.getElementById('root')
);