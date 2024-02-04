const express = require('express')
const { addIncomeCategory, getAllIncomeCategorys, editIncomeCategory, removeIncomeCategory, incomeCategoryById } = require('../../controllers/incomeCategory.controller')
const { verifyUser } = require('../../middlewares/auth.verify')

const router = express.Router()

router.route('/add').post(verifyUser , addIncomeCategory)
router.route('/').get( verifyUser , getAllIncomeCategorys)
router.route('/update/:id').post( verifyUser , editIncomeCategory)
router.route('/delete/:id').delete( verifyUser , removeIncomeCategory)
router.route('/:id').get( verifyUser , incomeCategoryById)

module.exports = router