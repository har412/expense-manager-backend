const express = require('express')
const { verifyUser } = require('../../middlewares/auth.verify')
const { getAllCharitys, editCharity, removeCharity, addCharity } = require('../../controllers/charity.controller')


const router = express.Router()

router.route('/add').post(verifyUser , addCharity)
router.route('/').get(verifyUser , getAllCharitys)
router.route('/update/:id').post(verifyUser , editCharity)
router.route('/delete/:id').delete(verifyUser , removeCharity)

module.exports = router