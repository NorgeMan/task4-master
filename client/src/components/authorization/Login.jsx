import React, {useState} from 'react';
import './authorization.css';
import Input from "../../utils/input/Input";
import "bootstrap/dist/css/bootstrap.css";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import Social from "./Social";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization__header">Login In</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter the email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter the password..."/>
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Login In</button>
            <Social/>
        </div>
    );
};

export default Login;