import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/Logo.png';
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {logout} from "../../reducers/userReducer";
import {useSelector} from "react-redux";
import SearchField from 'react-search-field';
import {useTranslation} from 'react-i18next';

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const isAdmin = true;
    const {t} = useTranslation();

    return (
        <div className="navbar">
            <div className="container">

                <img src={Logo} alt="Logo" height="42" className="navbar__logo"/>

                <div className="navbar__login"><NavLink to="/welcome">{t('welcome_page.label')}</NavLink></div>
                <div className="navbar__login"><NavLink to="/articles">{t('articles.label')}</NavLink></div>
                <div className="navbar__login"><NavLink to="/authors">{t('authors.label')}</NavLink></div>
                <div className="navbar__login"><NavLink to="/genres">{t('genres.label')}</NavLink></div>
                {isAdmin && <div className="navbar__login"><NavLink to="/users">{t('users.label')}</NavLink></div>}

                <SearchField placeholder={t('search.label')} onSearchClick={onSearchClick}/>
                {!isAuth &&
                <div className="navbar__registration"><NavLink to="/login">{t('login.label')}</NavLink></div>}
                {!isAuth &&
                <div className="navbar__registration"><NavLink to="/registration">{t('registration.label')}</NavLink>
                </div>}
                {!isAuth &&
                <div className="navbar__registration" onClick={() => dispatchEvent(logout())}><NavLink to="/logout">
                    {t('logout.label')} </NavLink></div>}
            </div>
        </div>
    );
};

function onSearchClick() {
    // to-do implement handler here
}

export default Navbar;