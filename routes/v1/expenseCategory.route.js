const express = require('express')
const { addExpenseCategory, getAllExpenseCategorys, editExpenseCategory, removeExpenseCategory, expenseCategoryById } = require('../../controllers/expenseCategory.controller')
const { verifyUser } = require('../../middlewares/auth.verify')

const router = express.Router()

router.route('/add').post(verifyUser , addExpenseCategory)
router.route('/').get( verifyUser , getAllExpenseCategorys)
router.route('/update/:id').post( verifyUser , editExpenseCategory)
router.route('/delete/:id').delete( verifyUser , removeExpenseCategory)
router.route('/:id').get( verifyUser , expenseCategoryById)

module.exports = router