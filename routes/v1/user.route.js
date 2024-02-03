const express = require('express')
const { verifyUser } = require('../../middlewares/auth.verify')
const { getUserById, editUser } = require('../../controllers/user.controller')


const router = express.Router()

router.route('/').get(verifyUser ,getUserById)
router.route('/update/:id').post(verifyUser ,editUser)


module.exports = router