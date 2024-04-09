require('dotenv').config();
const express=require('express')
const app= express()
const cors= require('cors')
const connectDB = require('./config/db')

const port = process.env.PORT;
const db_url = process.env.DATABASE_URL;
connectDB(db_url)

const userRoute = require('./routes/userRoute/user.js')
const adminRoute = require('./routes/adminRoute/admin.js')
const commentRoute = require('./routes/commentRoute/comment.js')
const communityRoute= require('./routes/communityRoute/community.js')
const postRoute= require('./routes/postRoute/post.js')
const rateLimit = require('./middlewares/rateLimit.js')


app.use(express.json())
app.use(cors())


app.use('/api',rateLimit)
app.use('/api',userRoute,adminRoute,commentRoute,communityRoute,postRoute)





app.listen(port, () => console.log(`Server running on ${port}`));