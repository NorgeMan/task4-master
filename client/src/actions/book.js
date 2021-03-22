import axiosConfig from './axiosConfig';
import {setBooks} from "../reducers/bookReducer";

export function getBooks() {
    return async dispatch => {
        try {
            const response = await axiosConfig.get(`/api/catalog/books`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            console.log(response.data['book_list']);
            dispatch(setBooks(response.data['book_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}

export async function getBookCreate() {
    try {
        const response = await axiosConfig.get(`/api/catalog/book/create`,
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
        console.log(response.data);
        return response.data;
    } catch (e) {
        alert(e.message)
    }
}

export async function getBookUpdate(id) {
    try {
        const response = await axiosConfig.get(`/api/catalog//book/${id}/update`,
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
        console.log(response.data);
        return response.data;
    } catch (e) {
        alert(e.message)
    }
}

export function getBookDelete(id) {
    return async dispatch => {
        try {
            const response = await axiosConfig.get(`/api/catalog/book/:id/delete`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                    params: {id: id}
                }
            )

            console.log(response.data['book_list']);
            dispatch(setBooks(response.data['book_list']))
        } catch (e) {
            alert(e.message)
        }
    }
}

export async function getBook(id) {
    try {
        const response = await axiosConfig.get(`/api/catalog//book/${id}`,
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
        console.log(response.data);
        return response.data;
    } catch (e) {
        alert(e.message)
    }
}


// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
//router.get('/book/create', bookController.book_create_get);

// POST request for creating Book.
//router.post('/book/create', authMiddleware, bookController.book_create_post);

// GET request to delete Book.
//router.get('/book/:id/delete', bookController.book_delete_get);

// POST request to delete Book.
//router.post('/book/:id/delete', authMiddleware, bookController.book_delete_post);

// GET request to update Book.
//router.get('/book/:id/update', bookController.book_update_get);

// POST request to update Book.
//router.post('/book/:id/update', authMiddleware, bookController.book_update_post);

// GET request for one Book.
//router.get('/book/:id', bookController.book_detail);
