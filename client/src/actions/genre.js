import axios from 'axios';
import {setGenres} from "../reducers/genreReducer";

export function getGenres() {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/catalog/genres`,
                       {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            console.log(response.data['genre_list']);
            dispatch(setGenres(response.data['genre_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}