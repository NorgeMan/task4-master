const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const commentController = require('../controller/commentController')

router.get('', authMiddleware, commentController.getAll)
router.get('/:article_id', authMiddleware, commentController.getByArticleId)

module.exports = router