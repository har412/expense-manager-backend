const express = require('express')
const app = express()
const { connect } = require('./db_connect')

// connect to db
connect()

// Route Imports 
const authRouter = require('./routes/v1/auth.route')

app.use(express.json({}))



// Routes 
app.use('/v1/auth',authRouter)


app.listen(process.env.PORT || 8080 ,()=>{
    console.log("Application running on https://localhost:8080")
})