import Task from "../model/taskModel.js";
import mongoose from "mongoose";

const newTask = async (req, res) => {
  const { title, data, isCompleted } = req.body;

 
  if (!title || !data) {
    return res.status(400).json({ message: "Fill in required fields" });
  }

  try {

    const exist_Title = await Task.findOne({ title });

    if (exist_Title) {
      return res.status(400).json({ message: "Title already exists" });
    }

    const taskStatus = isCompleted !== undefined ? isCompleted : false;


    const newTask = new Task({
      title,
      data,
      isCompleted: taskStatus,
    });

    await newTask.save();

    res.status(201).json({
      message: "Task saved successfully",
      title: newTask.title,
      data: newTask.data,
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Something went wrong, please try again later" });
  }
};

export default newTask;
