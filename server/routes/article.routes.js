const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const articleController = require('../controller/articleController')
const {check} = require("express-validator")

router.get('/:article_id', authMiddleware, articleController.get)
router.get('/:title', authMiddleware, articleController.getByTitle)
router.get('/all', authMiddleware, articleController.getAll)

router.post('/create', authMiddleware,
    [
        check('title', "Incorrect title").isLength({min: 1, max: 400}),
        check('description', "Incorrect description").isLength({min: 1, max: 2000})
    ], articleController.create)

router.put('/update', authMiddleware,
    [
        check('title', "Incorrect title").isLength({min: 1, max: 400}),
        check('description', "Incorrect description").isLength({min: 1, max: 2000})
    ], articleController.update)


router.delete('/delete/:id', authMiddleware, articleController.delete)

module.exports = router