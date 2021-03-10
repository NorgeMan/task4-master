const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const articleController = require('../controller/articleController')

router.get('', authMiddleware, articleController.getAll)
router.get('/:title', authMiddleware, articleController.getByTitle)

module.exports = router