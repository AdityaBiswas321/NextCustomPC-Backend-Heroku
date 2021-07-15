import express from 'express'
// import connectDB from './config/db.js'
import dotenv from 'dotenv'
import leadsRoutes from './routes/leadsRoutes.js'
import cors from 'cors'


dotenv.config()
// connectDB()



const app = express()

app.use(express.json())



app.use(cors())



app.use('/api/lead', leadsRoutes)






const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Serveer running ${process.env.NOVE_ENV} mode port ${PORT}`)
)