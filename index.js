const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
// const axios = require('axios')

const authRouter = require('./Router')
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 5555
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1/", authRouter)

const start = async () => {
    try {
        //MongoBD connect
        // await mongoose.connect(`mongodb://localhost:27017/mongodb`)
        await mongoose.connect(process.env.BD_URL)

        app.listen(PORT, () => console.log(`===== Server started on port ${PORT} =====`))

        // await axios.get('http://localhost:5000/api/v1/checker/' + process.env.ROOT_TOKEN)

    } catch (e) {
        console.log(e)
    }
}

start()

