const express = require('express')
const app = express()
const { connect } = require('./db_connect')

const env = require('dotenv')
env.config({})

// connect to db
connect()

// Route Imports 
const authRouter = require('./routes/v1/auth.route')
const expenseRouter = require('./routes/v1/expense.route')

app.use(express.json({}))

// Routes 
app.use('/v1/auth',authRouter)
app.use('/v1/expense',expenseRouter)


app.listen(process.env.PORT || 8080 ,()=>{
    console.log("Application running on https://localhost:8080")
})