import Task from "../model/taskModel.js";
import mongoose from "mongoose";

const getallTask = async (req, res) => {
  try {
    const taskId = await Task.find();
    if (taskId.length === 0) {
      return res.status(404).json({ message: "Task does not exist" });
    }

    res.status(200).json({ message: "Task fetched", taskId });
  } catch (error) {
    res.status(500).json({ message: "Error from us" });
  }
  
};


export default getallTask;