import {setGenres} from "../reducers/genreReducer";
import axiosConfig from "./axiosConfig";

export function getGenres() {
    return async dispatch => {
        try {
            const response = await axiosConfig.get(`/api/catalog/genres`,
                       {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            console.log(response.data['genre_list']);
            dispatch(setGenres(response.data['genre_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}