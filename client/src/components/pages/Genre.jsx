import React from 'react';
import {useParams} from "react-router-dom";
import './genres.css';

const Genre = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {id} = useParams();

    return (
        <div className="authorsList">
            <div className="container">
                <label>Add genre </label>
                Name:
                <input type="text" placeholder="Enter the author's name" required/>
                Surname:
                <input type="text" placeholder="Enter the author's surname" required/>
                Date of birth:
                <input type="date" id="birthday" name="birthday" />
                Date of death:
                <input type="date" id="day of the dead" name="day of the dead" />
                <input type="submit" value="Enter"/>
            </div>
        </div>
    );
}
export default Genre;