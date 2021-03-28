import React from 'react';
import {useParams} from "react-router-dom";
import './genres.css';
import {Upload} from "@progress/kendo-react-upload";

const Genre = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {id} = useParams();

    return (
        <div className="genresList">
            <div className="form__container form">
                <h3>Add genre</h3>
                <input type="text" className="inputs" placeholder="Enter the genre's name" required/>
                <p>Pin articles if you want:</p>
                <Upload
                    className="upload"
                    batch={false}
                    multiple={true}
                    defaultFiles={[]}
                    withCredentials={false}
                />
                <input className="submit" type="submit" name="commit" value="Enter"/>
            </div>
        </div>
    );
}
export default Genre;