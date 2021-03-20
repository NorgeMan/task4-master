import React, {useState} from 'react';
import './authorization.css';
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";
import "bootstrap/dist/css/bootstrap.css";
import Social from "./Social";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='authorization'>
            <div className="authorization__header">Sign Up</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter the email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter the password..."/>
            <button className="authorization__btn" onClick={() => registration(email, password)}>Sign Up</button>
            <Social/>
        </div>
    );
};

export default Registration;