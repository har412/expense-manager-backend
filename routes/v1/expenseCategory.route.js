const express = require('express')
const { verifyUser } = require('../../middlewares/auth.verify')
const { addExpenseCategory, getAllExpenseCategorys, editExpenseCategory, removeExpenseCategory } = require('../../controllers/expenseCategory.controller')


const router = express.Router()

router.route('/add').post(verifyUser ,addExpenseCategory)
router.route('/').get(verifyUser , getAllExpenseCategorys)
router.route('/update/:id').post(verifyUser , editExpenseCategory)
router.route('/delete/:id').delete(verifyUser , removeExpenseCategory)

module.exports = router