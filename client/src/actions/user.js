import axiosConfig from './axiosConfig';
import "bootstrap/dist/css/bootstrap.css";
import {setUser, setUsers, setLocale} from "../reducers/userReducer";

export const registration = async (email, password) => {
    try {
        const response = await axiosConfig.post(`/api/auth/registration`, {
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
            const response = await axiosConfig.post(`/api/auth/login`, {
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
            const response = await axiosConfig.get(`/api/auth/auth`,
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
            const response = await axiosConfig.get(`/api/users`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            console.log(response.data['user_list']);
            dispatch(setUsers(response.data['user_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}

export const locale = (locale) => {
    return async dispatch => {
        try {
            dispatch(setLocale(locale))
            localStorage.setItem('locale', locale)
        } catch (e) {
            alert(e.message)
        }
    }
}