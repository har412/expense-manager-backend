const express = require('express')
const { verifyUser } = require('../../middlewares/auth.verify')
const { addIncome, getAllIncomes, editIncome, removeIncome } = require('../../controllers/income.controller')


const router = express.Router()

router.route('/add').post(verifyUser ,addIncome)
router.route('/').get(verifyUser , getAllIncomes)
router.route('/update/:id').post(verifyUser ,editIncome)
router.route('/delete/:id').delete(verifyUser ,removeIncome)

module.exports = router