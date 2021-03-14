const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const app = express()
const PORT = config.get('serverPort')
const DB_URL = config.get('dbUrl')
const corsMiddleware = require('./middleware/cors.middleware')

const authRouter = require("./routes/auth.routes")
const usersRouter = require("./routes/users.routes")
const catalogRouter = require("./routes/catalog.routes")
const profileRouter = require("./routes/profile.routes")

app.use(corsMiddleware)
app.use(express.json())

app.use("/api/auth", authRouter)
app.use('/catalog', catalogRouter)
app.use('/api/users', usersRouter)
app.use('/api/profiles', profileRouter)

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