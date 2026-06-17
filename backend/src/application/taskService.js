class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  getAllTasks() {
    return this.taskRepository.findAll();
  }

  createTask(taskData) {
    if (!taskData.title || taskData.title.trim() === "") {
      throw new Error("Title is required");
    }

    const task = {
      id: Date.now(),
      title: taskData.title,
      description: taskData.description || "",
      status: taskData.status || "todo",
      priority: taskData.priority || "medium",
      createdAt: new Date().toISOString()
    };

    return this.taskRepository.save(task);
  }

  updateTask(id, taskData) {
    if (taskData.title !== undefined && taskData.title.trim() === "") {
      throw new Error("Title cannot be empty");
    }

    return this.taskRepository.update(id, taskData);
  }

  updateTaskStatus(id, status) {
    const allowedStatuses = ["todo", "in-progress", "done"];

    if (!allowedStatuses.includes(status)) {
      throw new Error("Invalid status");
    }

    return this.taskRepository.updateStatus(id, status);
  }

  deleteTask(id) {
    return this.taskRepository.delete(id);
  }
}

module.exports = TaskService;