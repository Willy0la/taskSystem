import Task from "../model/taskModel.js";
import mongoose from "mongoose";

const getbyId = async (req, res) => {
  const { taskId } = req.params;

  try {

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({ message: "Invalid Task Id" });
      }
    
      const task = await Task.findById(taskId );
    
      if (!task) {
        return res.status(404).json({ message: "Task doesn't exist" });
      }
    
      res.status(200).json({message: "Task fetched successfully", task})
    
  } catch (error) {
    res.status(500).json({ message: "Error from us" });
  }

 
};


export default getbyId;
