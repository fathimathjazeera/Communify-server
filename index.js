require('dotenv').config();
const express=require('express')
const app= express()
const cors= require('cors')
const connectDB = require('./config/db')




const port = process.env.PORT;
const db_url = process.env.DATABASE_URL;
connectDB(db_url)




app.listen(port, () => console.log(`Server running on ${port}`));