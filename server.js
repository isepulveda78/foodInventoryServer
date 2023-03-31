import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { readdirSync } from 'fs'

require("dotenv").config()

const app = express()

//db
mongoose.connect(process.env.DATABASE)
.then(() => console.log("Db connected")).catch((err)=> console.log('Db Connection Error: ', err))

//middlewares - needed to communicate with the client
app.use(express.json({limit: '5mb'}))
app.use(cors({
    origin: [process.env.CLIENT_URL]
}))

//autoload routes
readdirSync("./routes").map((r) => app.use('/api', require(`./routes/${r}`)))

//listen
const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Server is on port ${port}`))