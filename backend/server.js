const express = require("express");
const cors = require("cors");

const TaskService = require("./src/application/taskService");
const JsonTaskRepository = require("./src/adapters/persistence/jsonTaskRepository");
const createTaskRoutes = require("./src/adapters/http/taskRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const taskRepository = new JsonTaskRepository();
const taskService = new TaskService(taskRepository);

app.get("/", (req, res) => {
  res.send("TaskBoard Backend läuft");
});

app.use("/api", createTaskRoutes(taskService));

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});