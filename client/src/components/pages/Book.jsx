import React, {Component, useState} from 'react';
import './book.css';
import '../authorization/authorization.css';
import {getBookUpdate, getBookUpdate1, getBookUpdate2} from "../../actions/book";

import {withRouter, useParams} from "react-router-dom";

// stateful component
class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            summary: '',
            author: {},
            genre: [],
            tags: [],

            genres: [],
            authors: [],
            json: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    mapStateToProps = state => ({
        bookMap: state.bookMap
    });

    async componentDidMount() {
        const id = this.props.match.params.id;
        console.log('id: ' + id);
        try {
            // const response = await getBookUpdate2(id);
            // const response = getBookUpdate1(id);
            // console.log(response);
            const bookState = await getBookUpdate1(id);
            console.log('bookState');
            console.log(bookState);
            this.setState({
                ['json']: bookState
            });
            this.setState({'title': bookState.book.title});
            this.setState({'summary': bookState.book.summary});
            this.setState({'author': bookState.book.author});
            this.setState({'genre': bookState.book.genre});

            this.setState({'authors': bookState.authors});
            this.setState({'genres': bookState.genres});
            console.log(this.state);

            // const bookState = useSelector(state => state.book);
            //const json = await response.json();
            //this.setState({data: json});
        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    saveEntity = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="authorsList">
                <div className="form__container form">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Book id:{this.props.match.params.id}</h3>
                        Name of the book:
                        <input name="title" type="text" value={this.state.title} className="inputs"
                               placeholder="Enter the book's title"
                               onChange={this.handleInputChange} required/>
                        About author:
                        <input className="about inputs" type="url" id="aboutAuthor" name="url"
                               placeholder="Enter the url with the info about author"/>
                        About author:
                        <select name="author" value={this.state.author._id} className="inputs" onChange={this.handleInputChange} required>
                            {
                                this.state.authors.map(
                                    author => (
                                        <option key={author._id} value={author._id}>{author.first_name} {author.family_name}</option>
                                    ))
                            }
                        </select><br/>
                        Summary:<br/>
                        <textarea name="Summary" value={this.state.summary} className="inputs"
                                  placeholder="Enter the summary"
                                  onChange={this.handleInputChange} cols={100} rows={10}
                                  wrap={true} required/>
                        <br/>Pin a file:
                        <input className="file inputs" type="file" id="file" name="file" multiple/>
                        Genre:
                        <input className="submit" type="submit" name="commit" value="Enter"
                               onClick={() => this.saveEntity}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Book);

// {
//     this.state.genres.map(
//         genreItem => (
//             <div style='display: inline; padding-right:10px;'>
//                 <input
//                     name="genre"
//                     id={genreItem._id}
//                     value={genreItem._id}
//                     type="checkbox"
//                     onChange={this.handleInputChange}
//                     className="inputs"
//                 />
//                 <label for={genreItem._id}>{genreItem.name}</label>
//             </div>
//         ))
// }
