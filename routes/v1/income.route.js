const express = require('express')
const { addIncome, getAllIncomes, editIncome, removeIncome, incomeById } = require('../../controllers/income.controller')
const { verifyUser } = require('../../middlewares/auth.verify')

const router = express.Router()

router.route('/add').post(verifyUser , addIncome)
router.route('/').get( verifyUser , getAllIncomes)
router.route('/update/:id').post( verifyUser , editIncome)
router.route('/delete/:id').delete( verifyUser , removeIncome)
router.route('/:id').get( verifyUser , incomeById)

module.exports = router