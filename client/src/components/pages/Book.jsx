import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Input from "../../utils/input/Input";
import {useSelector} from "react-redux";

const Book = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {id} = useParams();

    const author_list = useSelector(state => state.books);
    const authors = author_list.authors['authors'];

    const [title, setTitle] = useState("")
    const [email, setEmail] = useState("")
    const [author, setAuthor] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = (event) => {
        console.log('Email: ${email}\n' +
            '      Password: ${password}\n' +
            '      Country: ${country}\n' +
            '      Accepted Terms: ${acceptedTerms}'
        );
        event.preventDefault();
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <h1>Book: {id}</h1>
            <div className='authorization'>
                <form onSubmit={handleSubmit}>
                    <div className="authorization__header">Book: {id}</div>
                    <Input value={email} setValue={setEmail} type="text" placeholder="Enter the email..."/>
                    <Input value={password} setValue={setPassword} type="password" placeholder="Enter the password..."/>
                    <label> Email:
                        <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)}
                               required/>
                    </label>

                    <label> Name of book
                        <input name="title" type="text" value={title} placeholder='Name of book'
                               onChange={e => setTitle(e.target.value)} required/>
                    </label>

                    <label> Author:
                        <select name="author" value={author} onChange={e => setAuthor(e.target.value)} required>
                            {authors.map(
                                author => (<option key={author._id} value={author._id}>{author.first_name}</option>
                                ))
                            }
                        </select>
                    </label>

                    <label>
                        <input
                            name="acceptedTerms"
                            type="checkbox"
                            onChange={e => setAcceptedTerms(e.target.value)}
                            required/>
                        I accept the terms of service
                    </label>

                    <button className="authorization__btn" onClick={() => saveEntity()}>Save
                    </button>
                </form>
            </div>

        </div>
    );
}

function saveEntity() {

}

export default Book;