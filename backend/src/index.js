import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes'
dotenv.config()
const app = express()
const port = process.env.PORT || 5000
const corsOptions ={
    origin :true
}
app.get('/',(req, res) =>{
    res.send('Hello world')
})
//connect to DB
const connectToDatabase = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Database connection established')
    }
    catch(error){
        console.log("MongoDB database connection failed")
    }
}
//middleware
app.use(express.json())
app.use(cookeParser())
app.use(cors(corsOptions))
app.use('api/v1/auth', authRoute)
app.listen(port, () =>{
    connectToDatabase()
    console.log(`Server is running on port ${port}`)
})
