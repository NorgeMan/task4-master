const SET_BOOKS = "SET_BOOKS"

const defaultState = {
    books: []
}

export default function bookReducer(state = defaultState, action){
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state
    }
}
export const setBooks = (books) => ({type: SET_BOOKS, payload: books})