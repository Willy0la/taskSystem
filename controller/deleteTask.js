import mongoose from "mongoose";
import Task from "../model/taskModel";

const deleteTask = async (req, res)=>{

    try {
    
        const {taskID} = req.params

        if(!mongoose.Types.ObjectId.isValid(taskID)){
            return res.status(400).json({message:"invalid Task ID"})
        }
        const delTask = await Task.findByIdAndDelete(taskID)

        if(!delTask){
            return res.status(404).json({message:"Task not found"})
        }

        res.status(200).json({message: "Task deleted successfully"})

    } catch (error) {
        
        console.error(error); 
        res.status(500).json({ message: "Something went wrong, please try again later" });
    }

}

export default deleteTask;