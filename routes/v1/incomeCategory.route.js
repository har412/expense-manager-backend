const express = require('express')
const { verifyUser } = require('../../middlewares/auth.verify')
const { addIncomeCategory, getAllIncomeCategorys, editIncomeCategory, removeIncomeCategory } = require('../../controllers/incomeCategory.controller')


const router = express.Router()

router.route('/add').post(verifyUser , addIncomeCategory)
router.route('/').get(verifyUser ,getAllIncomeCategorys)
router.route('/update/:id').post(verifyUser , editIncomeCategory)
router.route('/delete/:id').delete(verifyUser , removeIncomeCategory)

module.exports = router