import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.png'
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {logout} from "../../reducers/userReducer";
import {useDispatch, useSelector} from "react-redux";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="Logo" height="42" className="navbar__logo"/>
                <div className="navbar__welcome"><NavLink to="../welcomepage/WelcomePage.jsx">Welcome page</NavLink></div>
                {!isAuth && <div className="navbar__login"><NavLink to="/login">Login In</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Sign Up</NavLink></div>}
                {!isAuth && <div className="navbar__login" onClick={() => dispatchEvent(logout())}>Log out</div>}
            </div>
        </div>
    );
};

export default Navbar;