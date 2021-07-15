import express from 'express'
// import connectDB from './config/db.js'
import dotenv from 'dotenv'
import leadsRoutes from './routes/leadsRoutes.js'
import cors from 'cors'
import path from 'path'

dotenv.config()
// connectDB()



const app = express()

app.use(express.json())
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '../frontend/out')))


app.use(cors())



app.use('/api/lead', leadsRoutes)


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'out', 'index.html'))
})



const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Serveer running ${process.env.NOVE_ENV} mode port ${PORT}`)
)