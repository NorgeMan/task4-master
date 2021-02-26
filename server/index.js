const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const usersRouter = require("./routes/users.routes")
const app = express()
const PORT = config.get('serverPort')
const DB_URL = config.get('dbUrl')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use('/api/users', usersRouter)

const start = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()