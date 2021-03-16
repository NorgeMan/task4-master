import React from 'react';
import {MDBCol, MDBFormInline, MDBBtn} from "mdbreact";
import {Tabs, Tab, Panel} from '@bumaga/tabs'
import "./welcomepage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {useDispatch} from "react-redux";
import {Button, Link} from "@material-ui/core";
import Authors from "../lists/Authors";
import {Route} from "react-router-dom";

const WelcomePage = () => {
    const dispatch = useDispatch()

    return (
        <MDBCol md="12">
            <MDBFormInline className="md-form mr-auto mb-4">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                    Search
                </MDBBtn>
                <div>
                    <Tabs>
                        <div className="tabs">
                            <Tab>
                                <button className="tab-lists">Authors</button>
                            </Tab>
                            <Tab>
                                <button className="tab-lists">Articles</button>
                            </Tab>
                            <Tab>
                                <button className="tab-lists">Genres</button>
                            </Tab>
                        </div>
                        <Panel>
                            <p>
                                Source: {' '}
                                <a href="../lists/Authors.jsx">Authors</a>
                            </p>
                        </Panel>
                        <Panel></Panel>
                        <Panel></Panel>
                    </Tabs>
                </div>
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