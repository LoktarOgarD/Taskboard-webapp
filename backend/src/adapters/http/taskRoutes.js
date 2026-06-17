const express = require("express");

function createTaskRoutes(taskService) {
  const router = express.Router();

  router.get("/tasks", (req, res) => {
    const tasks = taskService.getAllTasks();
    res.json(tasks);
  });

  router.post("/tasks", (req, res) => {
    try {
      const newTask = taskService.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({
        message: error.message
      });
    }
  });

  router.put("/tasks/:id", (req, res) => {
    try {
      const updatedTask = taskService.updateTask(req.params.id, req.body);
      res.json(updatedTask);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  });

  router.patch("/tasks/:id/status", (req, res) => {
    try {
      const updatedTask = taskService.updateTaskStatus(
        req.params.id,
        req.body.status
      );

      res.json(updatedTask);
    } catch (error) {
      res.status(400).json({
        message: error.message
      });
    }
  });

  router.delete("/tasks/:id", (req, res) => {
    try {
      taskService.deleteTask(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  });

  return router;
}

module.exports = createTaskRoutes;