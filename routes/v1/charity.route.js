const express = require('express')
const { verifyUser } = require('../../middlewares/auth.verify')
const { insertCharity } = require('../../services/charity.service')
const { getAllCharitys, editCharity, removeCharity } = require('../../controllers/charity.controller')


const router = express.Router()

router.route('/add').post(verifyUser , insertCharity)
router.route('/').get(verifyUser , getAllCharitys)
router.route('/update/:id').post(verifyUser , editCharity)
router.route('/delete/:id').delete(verifyUser , removeCharity)

module.exports = router