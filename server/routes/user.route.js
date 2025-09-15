import express from "express"
import {check_body, check_cred} from "../middlewares/auth.middleware.js"
import { login_user, signup_user } from "../controllers/auth.controller.js"

const user_router = express.Router()

user_router.post("/register", check_body, signup_user)

user_router.post("/login", check_cred, login_user)

export default user_router