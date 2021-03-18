import React from 'react';
import {Panel, Tabs} from '@bumaga/tabs'
import "./welcomepage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {NavLink} from "react-router-dom";

const WelcomePage = () => {
    return (
        <div>
            <Tabs>
                <Panel>
                    <p><NavLink to="/authors">Authors</NavLink></p>
                </Panel>
            </Tabs>

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