import React from 'react';
import './author.css';
import {getAuthors} from "../../actions/author";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Author = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {id} = useParams();
    const dispatch = useDispatch()
    const author_list = useSelector(state => state.authors);
    if (!author_list) {
        dispatch(getAuthors());
    }
    return (
        <div className="authorsList">
            <div className="form__container form">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/welcome" >
                        Welcome page
                    </Link>
                    <Link color="inherit" href="/authors">
                        Authors
                    </Link>
                    <Typography color="textPrimary">Author</Typography>
                </Breadcrumbs>
                <h3>Add author</h3>
                Name:
                <input type="text" className="inputs" placeholder="Enter the author's name" required/>
                Surname:
                <input type="text" className="inputs" placeholder="Enter the author's surname" required/>
                Date of birth:
                <input className="date inputs" type="date" id="birthday" name="birthday"/>
                Date of death:
                <input className="date inputs" type="date" id="day of the dead" name="day of the dead"/>
                <input className="submit" type="submit" name="commit" value="Enter"/>
            </div>
        </div>
    );
}
export default Author;