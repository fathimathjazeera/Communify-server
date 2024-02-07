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
const communityRoute= require('./routes/communityRoute')
const postRoute= require('./routes/postRoute/post')
const cors=require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require("swagger-jsdoc")


const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Communify",
            version:"1.0.0",
            description:"A social media app API"
        },
        servers:[
            {
                url:"https://communifyserver.mrzera.in"
            }
        ],
    },
    apis:["./routes/*.js"]

}
const specs = swaggerJsDoc(options)

app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json())
app.use(cors())




app.use('/api',userRoute,adminRoute,commentRoute,communityRoute,postRoute)





app.listen(port, () => console.log(`Server running on ${port}`));