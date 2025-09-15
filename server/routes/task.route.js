import express from "express"
import { category_task, change_status, post_task, delete_task } from "../controllers/task.controller.js"
import { add_id } from "../middlewares/task.middleware.js"

const task_router = express.Router()

task_router.get("", category_task)

task_router.post("", add_id, post_task)

task_router.patch("/:id", change_status)

task_router.delete("/:id", delete_task)

export default task_router