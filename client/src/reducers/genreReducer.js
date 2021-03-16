const SET_GENRES = "SET_GENRES"

const defaultState = {
    genres: []
}

export default function genreReducer(state = defaultState, action){
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state
    }
}
export const setGenres = (genres) => ({type: SET_GENRES, payload: genres})