import mongoose from "mongoose"

const taskschema = new mongoose.Schema({
    user_id : {type : String, required : true},
    title : {type : String, required : true},
    description : {type:String, required:false},
    category : {type:String, required:true},
    is_done : {type:Boolean, required:true}
})

const Task = mongoose.model("Task", taskschema)

export default Task