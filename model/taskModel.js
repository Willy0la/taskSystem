import mongoose from "mongoose";
import { type } from "os";

const taskSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  data: { type: String, unique: false, required: true },
  isCompleted: { type: Boolean, default: false, required: true },

  createdAt: { type: Date, default:Date.now() },
});


const Task = new mongoose.model("Task", taskSchema)

export default Task; 