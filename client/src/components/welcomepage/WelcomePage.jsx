import React from 'react';
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {useDispatch} from "react-redux";
const WelcomePage = () => {
    const dispatch = useDispatch()
    return (
        <div className='welcome'>
            <div className="welcome_header">Welcome page</div>
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
    );
};

export default WelcomePage;