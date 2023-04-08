const express= require('express')

// const mongoose= require('mongoose')

const db= require('./config/database')
const app= express()

const departmentsRoutes= require('./routes/departments')
const staffsRoutes= require('./routes/staffs')
const staffSalariesRoutes= require('./routes/staffSalaries')

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api/departments',departmentsRoutes)
app.use('/api/staffs',staffsRoutes)
app.use('/api/staffsSalaries',staffSalariesRoutes)

db.connect()
const port= process.env.PORT||8080

app.listen(port,()=>console.log("Port is open"))


