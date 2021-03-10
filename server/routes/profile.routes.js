const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const profileController = require('../controller/profileController')

router.get('', authMiddleware, profileController.getAll)
router.get('/:user_id', authMiddleware, profileController.getByUserId)

module.exports = router