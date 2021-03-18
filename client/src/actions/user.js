import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import {setUser,setUsers} from "../reducers/userReducer";

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            // alert(e.message)
            console.log(e.message)
            localStorage.removeItem('token')
        }
    }
}

export const getUsers = () => {
    return async dispatch => {
        try {
            console.log('Token: ' + localStorage.getItem('token'))
            const response = await axios.get(`http://localhost:5000/api/users`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            console.log(response.data['user_list']);
            dispatch(setUsers(response.data['user_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}