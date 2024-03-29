const express = require('express')
const app = express()
const { connect } = require('./db_connect')
const cors = require('cors')
const env = require('dotenv')
const morgan = require('morgan')
app.use(morgan('tiny'))
connect()
env.config({})

//cors
app.use(cors({
    origin:"*"
}))

// 



// Route Imports 
const authRouter = require('./routes/v1/auth.route')
const expenseRouter = require('./routes/v1/expense.route')
const incomeRouter = require('./routes/v1/income.route')
const incomeCategoryRouter = require('./routes/v1/incomeCategory.route')
const expenseCategoryRouter = require('./routes/v1/expenseCategory.route')
const budgetRouter = require('./routes/v1/budget.route')
const charityRouter = require('./routes/v1/charity.route')
const userRouter = require('./routes/v1/user.route')

app.use(express.json({}))

// Routes 
app.use('/v1/auth',authRouter)
app.use('/v1/expense',expenseRouter)
app.use('/v1/user',userRouter)
app.use('/v1/charity',charityRouter)
app.use('/v1/budget',budgetRouter)
app.use('/v1/expenseCategory',expenseCategoryRouter)
app.use('/v1/incomeCategory',incomeCategoryRouter)
app.use('/v1/income',incomeRouter)



app.listen(process.env.PORT || 8080 ,()=>{
    console.log("Application running on https://localhost:8080")
})