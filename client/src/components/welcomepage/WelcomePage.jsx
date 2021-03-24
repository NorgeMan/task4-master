import React from 'react';
import "./welcomepage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import WelcomePageLatest from "./WelcomePageLatest";
import WelcomePagePopular from "./WelcomePagePopular";
import {useTranslation} from 'react-i18next';

const WelcomePage = () => {
    const {t} = useTranslation();
    return (
        <div>
            <h3>{t('welcome_page_latest.label')}</h3>
            <WelcomePageLatest />
            <h3>{t('welcome_page_popular.label')}</h3>
            <WelcomePagePopular />

            <div className="container">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
                <div className="item">7</div>
                <div className="item">8</div>
                <div className="item">9</div>
                <div className="item">10</div>
                <div className="item">11</div>
                <div className="item">12</div>
            </div>
        </div>

    );
};
export default WelcomePage;