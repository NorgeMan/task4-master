import React, {Component} from 'react';
import './book.css';
import '../authorization/authorization.css';

import {getBookUpdate} from "../../actions/book";
import {withRouter} from "react-router-dom";
import {withTranslation} from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
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
import {Upload} from "@progress/kendo-react-upload";

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

                    <h3>{t('book.label')}: {this.props.match.params.id}</h3>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl required component="fieldset">
                            <FormLabel component="title">{t('book_name.label')}:</FormLabel>
                            <FormGroup>
                                <input name="title" type="text" value={this.state.title} className="inputs"
                                       placeholder={t('book.text.label')}
                                       onChange={this.handleInputChange} required/>
                            </FormGroup>
                            <FormLabel component="author">{t('author.label')}:</FormLabel>
                            <FormGroup>
                                <select name="author" value={this.state.author._id} className="about inputs"
                                        onChange={this.handleInputChange} required>
                                    {
                                        this.state.authors.map(
                                            author => (
                                                <option key={author._id}
                                                        value={author._id}>{author.first_name} {author.family_name}
                                                </option>
                                            ))
                                    }
                                </select>
                            </FormGroup>
                            <FormLabel component="Summary">{t('summary.label')}:</FormLabel>
                            <FormGroup>
                                <textarea name="Summary" value={this.state.summary} className="inputs"
                                          placeholder={t('summary.text.label')}
                                          onChange={this.handleInputChange} cols={100} rows={6}
                                          wrap={true} required/>
                            </FormGroup>
                            <FormLabel component="File">{t('file.text.label')}:</FormLabel>
                            <FormGroup>
                                <Upload
                                    className='upload'
                                    batch={false}
                                    multiple={true}
                                    defaultFiles={[]}
                                    withCredentials={false}
                                />
                            </FormGroup>
                            <br/>
                            <FormLabel component="Genre">{t('genre.label')}:</FormLabel>
                            <FormGroup>
                                <div style={{display: 'inline'}}>
                                    {
                                        this.state.genres.map(
                                            genreItem => (
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        id={genreItem._id}
                                                        name={genreItem.name}
                                                        value={genreItem._id}
                                                        onChange={this.toggleCheckbox}
                                                    />}
                                                    label={genreItem.name}
                                                />
                                            ))
                                    }
                                </div>
                            </FormGroup>
                            <FormLabel component="Tag">{t('tags.label')}:</FormLabel>
                            <FormGroup>
                                <Autocomplete
                                    multiple
                                    id="Tag"
                                    options={this.state.genres}
                                    getOptionLabel={(genreItem) => `${genreItem.name}`}
                                    value={this.state.genres[0]}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="standard"
                                            label={t('tags.label')}
                                            placeholder={t('tag.text.label')}
                                        />
                                    )}
                                />
                            </FormGroup>
                        </FormControl>

                        <input className="submit" type="submit" name="Save" value={t('save.label')}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default withTranslation()(withRouter(Book));