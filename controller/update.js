import mongoose from "mongoose";
import Task from "../model/taskModel.js";


const modifyTask = async (req, res) => {
  const { title, data } = req.body;
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res.status(400).json({
      message: "Invalid task ID",
    });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, data },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res
      .status(200)
      .json({ message: "task Update", updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Error from us" });
  }
};

export default modifyTask;



