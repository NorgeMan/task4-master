const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware')

// Require our controllers.
const bookController = require('../controller/bookController');
const authorController = require('../controller/authorController');
const genreController = require('../controller/genreController');
const bookInstanceController = require('../controller/bookinstanceController');
const tagController = require('../controller/tagController');
const commentController = require('../controller/commentController');

/// BOOK ROUTES ///
// todo: add authorization service - authMiddleware

// GET catalog home page.
router.get('/', bookController.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', bookController.book_create_get);

// POST request for creating Book.
router.post('/book/create', authMiddleware, bookController.book_create_post);

// GET request to delete Book.
router.get('/book/:id/delete', bookController.book_delete_get);

// POST request to delete Book.
router.post('/book/:id/delete', authMiddleware, bookController.book_delete_post);

// GET request to update Book.
router.get('/book/:id/update', bookController.book_update_get);

// POST request to update Book.
router.post('/book/:id/update', authMiddleware, bookController.book_update_post);

// GET request for one Book.
router.get('/book/:id', bookController.book_detail);

// GET request for list of all Book.
router.get('/books', bookController.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', authorController.author_create_get);

// POST request for creating Author.
router.post('/author/create', authorController.author_create_post);

// GET request to delete Author.
router.get('/author/:id/delete', authorController.author_delete_get);

// POST request to delete Author
router.post('/author/:id/delete', authorController.author_delete_post);

// GET request to update Author.
router.get('/author/:id/update', authorController.author_update_get);

// POST request to update Author.
router.post('/author/:id/update', authorController.author_update_post);

// GET request for one Author.
router.get('/author/:id', authorController.author_detail);

// GET request for list of all Authors.
router.get('/authors', authorController.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genreController.genre_create_get);

// POST request for creating Genre.
router.post('/genre/create', genreController.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genreController.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genreController.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genreController.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genreController.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genreController.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genreController.genre_list);


/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', bookInstanceController.bookinstance_create_get);

// POST request for creating BookInstance.
router.post('/bookinstance/create', bookInstanceController.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', bookInstanceController.bookinstance_delete_get);

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', bookInstanceController.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', bookInstanceController.bookinstance_update_get);

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', bookInstanceController.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', bookInstanceController.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', bookInstanceController.bookinstance_list);

// tags controller ------
// GET request for creating a Tag. NOTE This must come before route that displays Genre (uses id).
router.get('/tag/create', tagController.tag_create_get);

// POST request for creating Tag.
router.post('/tag/create', tagController.tag_create_post);

// GET request to delete Tag.
router.get('/tag/:id/delete', tagController.tag_delete_get);

// POST request to delete Tag.
router.post('/tag/:id/delete', tagController.tag_delete_post);

// GET request to update Tag.
router.get('/tag/:id/update', tagController.tag_update_get);

// POST request to update Tag.
router.post('/tag/:id/update', tagController.tag_update_post);

// GET request for one Tag.
router.get('/tag/:id', tagController.tag_detail);

// GET request for list of all Tag.
router.get('/tags', tagController.tag_list);

// comments controller ------
// GET request for creating a Comment. NOTE This must come before route that displays Comment (uses id).
router.get('/comment/create', commentController.comment_create_get);

// POST request for creating Comment.
router.post('/comment/create', commentController.comment_create_post);

// GET request to delete Comment.
router.get('/comment/:id/delete', commentController.comment_delete_get);

// POST request to delete Comment.
router.post('/comment/:id/delete', commentController.comment_delete_post);

// GET request to update Comment.
router.get('/comment/:id/update', commentController.comment_update_get);

// POST request to update Comment.
router.post('/comment/:id/update', commentController.comment_update_post);

// GET request for one Comment.
router.get('/comment/:id', commentController.comment_detail);

// GET request for list of all Comment.
router.get('/comments', commentController.comment_list);

module.exports = router;
