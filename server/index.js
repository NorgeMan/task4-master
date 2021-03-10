const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const app = express()
const PORT = config.get('serverPort')
const DB_URL = config.get('dbUrl')
const corsMiddleware = require('./middleware/cors.middleware')

const authRouter = require("./routes/auth.routes")
const articleRouter = require("./routes/article.routes")
const categoryRouter = require("./routes/category.routes")
const commentRouter = require("./routes/comment.routes")
const profileRouter = require("./routes/profile.routes")
const tagRouter = require("./routes/tag.routes")
const usersRouter = require("./routes/users.routes")

app.use(corsMiddleware)
app.use(express.json())

app.use("/api/auth", authRouter)
app.use('/api/articles', articleRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/comments', commentRouter)
app.use('/api/profiles', profileRouter)
app.use('/api/tags', tagRouter)
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