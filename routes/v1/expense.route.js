const express = require('express')
const { addExpense, getAllExpenses, editExpense, removeExpense } = require('../../controllers/expense.controller')
const { verifyUser } = require('../../middlewares/auth.verify')

const router = express.Router()

router.route('/add').post(verifyUser , addExpense)
router.route('/').get( verifyUser , getAllExpenses)
router.route('/update/:id').post( verifyUser , editExpense)
router.route('/delete/:id').delete( verifyUser , removeExpense)

module.exports = router