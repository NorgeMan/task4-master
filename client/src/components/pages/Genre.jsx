import React from 'react';
import {useParams} from "react-router-dom";

const Genre = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    return (
        <div style={{height: '100%', width: '100%'}}>
            <h1>Genre: {id}</h1>
        </div>
    );
}
export default Genre;