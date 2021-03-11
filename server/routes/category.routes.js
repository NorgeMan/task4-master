const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const categoryController = require('../controller/categoryController')

router.get('/all', authMiddleware, categoryController.getAll)
router.get('/:name', authMiddleware, categoryController.getByName)
router.get('/:id', authMiddleware, categoryController.get)

module.exports = router