require('dotenv').config();
const express=require('express')
const app= express()
const cors= require('cors')
const connectDB = require('./config/db')

const port = process.env.PORT;
const db_url = process.env.DATABASE_URL;
connectDB(db_url)

const userRoute = require('./routes/userRoute/user')
const adminRoute = require('./routes/adminRoute/admin')
const commentRoute = require('./routes/commentRoute/comment')
const communityRoute= require('./routes/communityRoute/community')
const postRoute= require('./routes/postRoute/post')



app.use(express.json())
app.use(cors())




app.use('/api',userRoute,adminRoute,commentRoute,communityRoute,postRoute)





app.listen(port, () => console.log(`Server running on ${port}`));