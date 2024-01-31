const express = require('express')
const { register } = require('../../controllers/auth.controller')
const  router = express.Router()

router.route('/register').post(register)
router.route('/login').post(register)

module.exports = router