import React from 'react';
import Navbar from "./navbar/Navbar";
import './app.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Registration from './authorization/Registration';
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user"
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from "react/cjs/react.production.min";

import {getUsers} from "../actions/userList";
import Articles from "./lists/Articles";
import Authors from "./lists/Authors";
import Genres from "./lists/Genres";
import WelcomePage from "./welcomepage/WelcomePage";

import Logo from "../assets/img/navbar-logo.png";
import {logout} from "../reducers/userReducer";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    useEffect(() => {
        if (isAuth) {
            dispatch(getUsers())
        }
    })

    return (
        <Router>
            <div className='app'>
                <Navbar />
                <div className='wrap'>
                    <Switch>
                        <Route exact path="/" component={WelcomePage}/>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={WelcomePage}/>

                        <Route path="/welcome" component={WelcomePage}/>
                        <Route path="/articles" component={Articles}/>
                        <Route path="/authors" component={Authors}/>
                        <Route path="/genres" component={Genres}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
export default App;
