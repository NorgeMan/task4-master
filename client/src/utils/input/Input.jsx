import React from "react";
import './input.css';
import 'bootstrap/dist/css/bootstrap.css';
const Input = (props) => {
    return (
        <input onChange={(event) => props.setValue(event.target.value)}
        value={props.value}
        type={props.value}
        placeholder={props.placeholder}/>
    );
};
export default Input;