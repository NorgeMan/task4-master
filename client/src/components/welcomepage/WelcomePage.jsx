import React from 'react';
import "./welcomepage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import WelcomePageLatest from "./WelcomePageLatest";
import WelcomePagePopular from "./WelcomePagePopular";
import {useTranslation} from 'react-i18next';
import WelcomePageCatalog from "./WelcomePageCatalog";

const WelcomePage = () => {
    const {t} = useTranslation();
    return (
        <div>
            <h3>{t('welcome_page_latest.label')}</h3>
            <WelcomePageLatest />
            <h3>{t('welcome_page_popular.label')}</h3>
            <WelcomePagePopular />
            <h3>{t('welcome_page_catalog.label')}</h3>
            <WelcomePageCatalog />
        </div>
    );
};
export default WelcomePage;