import React from 'react';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import "./welcomepage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {useDispatch} from "react-redux";
const WelcomePage = () => {
    const dispatch = useDispatch()
    return (
        <MDBCol md="12">
            <MDBFormInline className="md-form mr-auto mb-4">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                    Search
                </MDBBtn>
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
            </MDBFormInline>
        </MDBCol>
    );
};

export default WelcomePage;