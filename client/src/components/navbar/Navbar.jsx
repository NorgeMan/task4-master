import React, {useState} from 'react';
import './navbar.css'
import Logo from '../../assets/img/Logo.png';
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {logout} from "../../reducers/userReducer";
import {useSelector} from "react-redux";
import SearchField from 'react-search-field';
import {useTranslation} from 'react-i18next';
import {Button, Fade, Menu, MenuItem} from "@material-ui/core";
import DarkTheme, {createTheme} from "react-dark-theme";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const isAdmin = true;
    const {t} = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const lightTheme = {
        background: 'white',
        text: 'black',
    }

    const darkTheme = {
        background: 'black',
        text: 'white',
    }

    const myTheme = createTheme(darkTheme, lightTheme)

    //const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="navbar">
            <div style={{backgroundColor: myTheme.background, color: myTheme.text}}>
                <div className="container">
                    <img src={Logo} alt="Logo" height="42" className="navbar__logo"/>

                    <div className="navbar__login"><NavLink to="/welcome">{t('welcome_page.label')}</NavLink></div>
                    <div className="navbar__login"><NavLink to="/articles">{t('articles.label')}</NavLink></div>
                    <div className="navbar__login"><NavLink to="/authors">{t('authors.label')}</NavLink></div>
                    <div className="navbar__login"><NavLink to="/genres">{t('genres.label')}</NavLink></div>
                    <SearchField placeholder={t('search.label')} onSearchClick={onSearchClick}/>
                    <Button className="" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        Menu/Меню
                    </Button>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>{!isAuth && <NavLink to="/login">{t('login.label')}</NavLink>}</MenuItem>
                        <MenuItem onClick={handleClose}>{!isAuth && <NavLink to="/registration">{t('registration.label')}</NavLink>}</MenuItem>
                        <MenuItem onClick={handleClose}>{isAdmin && <NavLink to="/users">{t('users.label')}</NavLink>}</MenuItem>
                    </Menu>

                    <DarkTheme light={lightTheme} dark={darkTheme}/>

                    {!isAuth && <div className="navbar__registration" onClick={() => dispatchEvent(logout())}><NavLink
                        to="/logout">{t('logout.label')} </NavLink></div>}
                </div>
            </div>
        </div>
    );
};

function onSearchClick() {
    // to-do implement handler here
}

export default Navbar;