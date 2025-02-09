import express from "express";
import connectDB from "./db.js";
import newTask from "./controller/newTask.js"; 
import getallTask from "./controller/getTask.js";
import getbyId from "./controller/getTaskid.js";
import modifyTask from "./controller/update.js";
import deleteTask from "./controller/deleteTask.js";
const app = express();

connectDB()

const route = express.Router();

app.use(express.json());

app.use("/api", route);

route.post("/newTask", newTask);
route.get("/tasks", getallTask);
route.get("/tasks/:taskId", getbyId);
route.put("/update/:taskId", modifyTask);
route.delete("/delete/:taskId", deleteTask)

app.listen(2025, () => {
  console.log("Server is listening on port 2025");
});
