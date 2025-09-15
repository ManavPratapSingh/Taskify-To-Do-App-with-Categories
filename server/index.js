import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import user_router from "./routes/user.route.js"
import task_router from "./routes/task.route.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

connectDB()

app.use("/api/auth", user_router)
app.use("/api/tasks", task_router)

app.listen(8000, () => {
    console.log("server running at port:8000");
})