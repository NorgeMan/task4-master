const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const tagController = require('../controller/tagController')

router.get('', authMiddleware, tagController.getAll)
router.get('/:name', authMiddleware, tagController.getByName)

module.exports = router