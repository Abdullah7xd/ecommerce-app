
import dotenv from 'dotenv'
import express from "express"
import connectDB from './config/db.js';
import morgan from 'morgan';
//config dotenv
dotenv.config();

//database config
connectDB();

//rest object
const app= express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.get('/',(req,res)=> {
    res.send({
        message:'welcome to ecommerce app'
    })
})
//port
const PORT = process.env.PORT || 5000;

//run listen
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});