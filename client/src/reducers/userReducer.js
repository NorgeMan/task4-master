const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const SET_USERS = "SET_USERS"
const SET_LOCALE = "SET_LOCALE"

const defaultState = {
    currentUser: {},
    isAuth: false,
    users: [],
    locale:{}
}

export default function userReducer (state = defaultState, action){
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_LOCALE:
            return {
                ...state,
                locale: action.payload
            }
        default:
            return state
    }
}
export const setUser = user => ({type: SET_USER, payload: user})
export const setLocale = locale => ({type: SET_LOCALE, payload: locale})
export const logout = () => ({type: LOGOUT})
export const setUsers = (users) => ({type: SET_USERS, payload: users})