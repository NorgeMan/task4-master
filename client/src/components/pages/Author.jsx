import React from 'react';
import {getBooks} from "../../actions/book";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const Author = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const dispatch = useDispatch()
    const book_list = useSelector(state => state.books);
    if (!book_list) {
        dispatch(getBooks());
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <h1>Author: {id}</h1>
        </div>
    );
}
export default Author;