import React, {Component} from 'react';
import './book.css';
import '../authorization/authorization.css';

import {getBookUpdate} from "../../actions/book";
import {withRouter} from "react-router-dom";
import {withTranslation} from 'react-i18next';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

    async componentDidMount() {
        const id = this.props.match.params.id;
        console.log('id: ' + id);
        try {
            const bookState = await getBookUpdate(id);
            this.setState({
                ['json']: bookState
            });
            this.setState({'title': bookState.book.title});
            this.setState({'summary': bookState.book.summary});
            this.setState({'author': bookState.book.author});
            this.setState({'genre': bookState.book.genre});

            this.setState({'authors': bookState.authors});
            this.setState({'genres': bookState.genres});

            this.selectedCheckboxes = new Set();
            console.log(this.state);
        } catch (error) {
            console.log(error);
        }
    }

    toggleCheckbox = id => {
        if (this.selectedCheckboxes.has(id)) {
            this.selectedCheckboxes.delete(id);
        } else {
            this.selectedCheckboxes.add(id);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const {t} = this.props;
        return (
            <div className="authorsList">
                <div className="form__container form">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/welcome">
                            {t('welcome_page.label')}
                        </Link>
                        <Link color="inherit" href="/articles">
                            {t('articles.label')}
                        </Link>
                        <Typography color="textPrimary">{this.state.title}</Typography>
                    </Breadcrumbs>
                    <form onSubmit={this.handleSubmit}>
                        <h3>{t('book.label')}:{this.props.match.params.id}</h3>
                        {t('book_name.label')}:
                        <input name="title" type="text" value={this.state.title} className="inputs"
                               placeholder="Enter the book's title"
                               onChange={this.handleInputChange} required/>
                        {t('author.label')}:
                        <input className="about inputs" type="url" id="aboutAuthor" name="url"
                               placeholder="Enter the url with the info about author"/>
                        <select name="author" value={this.state.author._id} className="inputs"
                                onChange={this.handleInputChange} required>
                            {
                                this.state.authors.map(
                                    author => (
                                        <option key={author._id}
                                                value={author._id}>{author.first_name} {author.family_name}</option>
                                    ))
                            }
                        </select>
                        <Autocomplete
                            options={this.state.authors}
                            getOptionLabel={(key) => `${key.first_name} ${key.family_name}`}
                            style={{width: '100%'}}
                            value={this.state.author}
                            disableClearable
                            onChange={(event, newValue) => {
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" fullWidth/>
                            )}
                        />

                        <br/>
                        Summary:<br/>
                        <textarea name="Summary" value={this.state.summary} className="inputs"
                                  placeholder="Enter the summary"
                                  onChange={this.handleInputChange} cols={100} rows={6}
                                  wrap={true} required/>
                        <br/>Pin a file:

                        <FormControl required component="fieldset">
                            <FormLabel component="Genre">Genre:</FormLabel>
                            <FormGroup>
                                <div style={{display: 'inline'}}>
                                    {
                                        this.state.genres.map(
                                            genreItem => (
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        name={genreItem.name}
                                                        value={genreItem._id}
                                                        onChange={this.toggleCheckbox}
                                                        id={genreItem._id}
                                                    />}
                                                    label={genreItem.name}
                                                />
                                            ))
                                    }
                                </div>
                            </FormGroup>
                            <FormLabel component="Tag">Tags:</FormLabel>
                            <FormGroup>
                                <Autocomplete
                                    multiple
                                    id="tags-standard"
                                    options={this.state.genres}
                                    getOptionLabel={(genreItem) => genreItem.name}
                                    defaultValue={this.state.genres[0]}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="standard"
                                            label="Tags"
                                            placeholder="Select the tag value"
                                        />
                                    )}
                                />
                            </FormGroup>
                        </FormControl>

                        <input className="submit" type="submit" name="Save" value="Save"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default withTranslation()(withRouter(Book));
// withRouter