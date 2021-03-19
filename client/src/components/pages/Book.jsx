import React from 'react';
import './book.css';
import {getBooks} from "../../actions/book";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const Book = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {id} = useParams();
    const dispatch = useDispatch()
    const book_list = useSelector(state => state.books);
    if (!book_list) {
        dispatch(getBooks());
    }
    return (
        <div className="authorsList">
            <div className="form__container form">
                <h3>Add book</h3>
                Title:
                <input type="text" className="inputs" placeholder="Enter the book's title" required/>
                Author:
                <input type="text" className="inputs" placeholder="Enter the book's author" required/>
                Pin a file:
                <input className="file inputs" type="file" id="file" name="file" multiple/>
                About author:
                <input className="about inputs" type="url" id="aboutAuthor" name="url"
                       placeholder="Enter the url with the info about author"/>

                <input className="submit" type="submit" name="commit" value="Enter"/>
            </div>
        </div>
    );
}
export default Book;