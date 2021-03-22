import axiosConfig from './axiosConfig';
import {setAuthors} from "../reducers/authorReducer";

export function getAuthors() {
    return async dispatch => {
        try {
            const response = await axiosConfig.get(`/api/catalog/authors`,
                       {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            console.log(response.data['author_list']);
            dispatch(setAuthors(response.data['author_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}