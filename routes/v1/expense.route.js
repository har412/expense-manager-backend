const express = require('express')
const { addExpense, getAllExpenses, editExpense, removeExpense } = require('../../controllers/expense.controller')

const router = express.Router()

router.route('/add').post(addExpense)
router.route('/').get(getAllExpenses)
router.route('/update/:id').post(editExpense)
router.route('/delete/:id').delete(removeExpense)

module.exports = router