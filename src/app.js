const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./config/db.config');

const app = express();
app.use(express.json());
app.use(cors());

const{connectionString, portNo} = dbConfig;
const studentRouter = require('./routes/student.routes')

app.get('/',(req, res)=>{
    res.json({name: "darshil"})
})

app.use("/student", studentRouter);

app.listen(portNo,()=>{
    console.log(`port no is : ${portNo}`);
})

console.log("hello darshil");