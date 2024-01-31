const express = require('express')
const { verifyUser } = require('../../middlewares/auth.verify')
const { getAllBudgets, editBudget, removeBudget, addBudget } = require('../../controllers/budget.controller')


const router = express.Router()

router.route('/add').post(verifyUser , addBudget)
router.route('/').get(verifyUser , getAllBudgets)
router.route('/update/:id').post(verifyUser , editBudget)
router.route('/delete/:id').delete(verifyUser , removeBudget)

module.exports = router