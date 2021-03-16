import axios from 'axios';
import {setAuthors} from "../reducers/authorReducer";

export function getAuthors() {
    return async dispatch => {
        try {
            console.log('Token: ' + localStorage.getItem('token'))
            const response = await axios.get(`http://localhost:5000/api/catalog/authors`,
                       {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )

            console.log('1. getAuthors:');
            console.log(response.data['author_list']);
            dispatch(setAuthors(response.data['author_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}