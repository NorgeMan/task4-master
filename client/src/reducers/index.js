import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "./userReducer";
import bookReducer from "./bookReducer";
import authorReducer from "./authorReducer";
import genreReducer from "./genreReducer";

const rootReducer = combineReducers({
    user: userReducer,
    books: bookReducer,
    authors: authorReducer,
    genres: genreReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))