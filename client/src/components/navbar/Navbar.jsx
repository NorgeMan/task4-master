import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/Logo.png';
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {logout} from "../../reducers/userReducer";
import {useDispatch, useSelector} from "react-redux";
import {MDBBtn, MDBCol, MDBFormInline} from "mdbreact";
import SearchField from 'react-search-field';

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()


    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="Logo" height="42" className="navbar__logo"/>

                <div className="navbar__login"><NavLink to="/welcome">Welcome page</NavLink></div>
                <div className="navbar__login"><NavLink to="/articles">Articles</NavLink></div>
                <div className="navbar__login"><NavLink to="/authors">Authors</NavLink></div>
                <div className="navbar__login"><NavLink to="/genres">Genres</NavLink></div>
                <SearchField placeholder='Search' onSearchClick={onSearchClick}/>
                {!isAuth && <div className="navbar__login"><NavLink to="/login">Login In</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Sign Up</NavLink></div>}
                {!isAuth &&
                <div className="navbar__login" onClick={() => dispatchEvent(logout())}><NavLink to="/logout">Log
                    out</NavLink></div>}
            </div>
        </div>
    );
};
function onSearchClick(){

}
export default Navbar;