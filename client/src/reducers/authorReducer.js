const SET_AUTHORS = "SET_AUTHORS"

const defaultState = {
    authors: []
}

export default function authorReducer(state = defaultState, action){
    switch (action.type) {
        case SET_AUTHORS:
            return {
                ...state,
                authors: action.payload
            }
        default:
            return state
    }
}
export const setAuthors = (authors) => ({type: SET_AUTHORS, payload: authors})