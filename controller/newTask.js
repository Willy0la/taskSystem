import Task from "../model/taskModel.js";
import mongoose from "mongoose";

const newTask = async (req, res) => {
  const { title, data, isCompleted } = req.body;

  if(!title ||data || isCompleted){
    return res.status(401).json({message:"Fill in required fiels"})
  }

  try {
    const exist_Title = await Task.findOne({ title });

    if (exist_Title) {
      return res.status(401).json({ message: "Title already exist" });
    }

    const taskStatus = isCompleted !== undefined ? isCompleted : false;

    const newTask = new Task({
      title,
      data,
      isCompleted: taskStatus,
    });

    await newTask.save();
    res.status(200).json({
      message: "task Saved",
      title: newTask.title,
      data: newTask.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error from us" });
  }
};

export default newTask;
