import Task from "../models/task.model.js"

export const category_task = async (req, res) => {
    try {
        const category = req.query.category
        if (!category) return res.status(400).json({message : "category required"})
        const response = await Task.find({category : category})
        if (!response) return res.status(404).json({message : "no tasks found of this category"})
        res.json({tasks : response})
    } catch (error) {
        res.status(500).json({error : error})
    }
}

export const post_task = async (req, res) => {
    try {
        const body = req.body
        const task = await Task.create(body)
        if (!task) return res.status(400).json({message : "error in user creation"})
        res.json(task)
    } catch (error) {
        res.status(500).json({error : error})
    }
}

export const change_status = async (req, res) => {
    try {
        const id = req.params.id
        const existing_task = await Task.findByIdAndUpdate(id, req.body, {new : true})
        if (!existing_task) res.status(400).json({message : "error in finding or updating the task"})
        res.json(existing_task)
    } catch (error) {
        res.status(500).json({error : error})
    }
}

export const delete_task = async (req, res) => {
    try {
        const deleted = await Task.findByIdAndDelete(req.params.id)
        if (!deleted) res.status(400).json({message : "error in finding or deleting the task"})
        res.send()
    } catch (error) {
        res.status(500).json({error : error})
    }
}