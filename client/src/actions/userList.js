import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import {setUsers} from "../reducers/userListReducer";

export function getUsers() {
    return async dispatch => {
        try {
            console.log('Token: ' + localStorage.getItem('token'))
            const response = await axios.get(`http://localhost:5000/api/users`,
                       {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUsers(response.data))
            console.log('1. found data')
            console.log(response.data)
        } catch (e) {
            alert(e.message)
        }
    }
}