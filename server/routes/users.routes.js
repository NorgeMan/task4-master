const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const userController = require('../controller/userController')

// router.get('', authMiddleware, userController.getUsers)
router.get('', userController.getUsers)
router.get('/:email', authMiddleware, userController.getByEmail)

module.exports = router