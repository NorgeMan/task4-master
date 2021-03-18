import axios from 'axios';
import {setBooks} from "../reducers/bookReducer";

export function getBooks() {
    return async dispatch => {
        try {
            console.log('Token: ' + localStorage.getItem('token'))
            const response = await axios.get(`http://localhost:5000/api/catalog/books`,
                       {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )

            console.log(response.data['book_list']);
            dispatch(setBooks(response.data['book_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}