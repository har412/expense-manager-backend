const express = require('express')
const { verifyUser } = require('../../middlewares/auth.verify')
const { insertBudget } = require('../../services/budget.service')
const { getAllBudgets, editBudget, removeBudget } = require('../../controllers/budget.controller')


const router = express.Router()

router.route('/add').post(verifyUser , insertBudget)
router.route('/').get(verifyUser , getAllBudgets)
router.route('/update/:id').post(verifyUser , editBudget)
router.route('/delete/:id').delete(verifyUser , removeBudget)

module.exports = router