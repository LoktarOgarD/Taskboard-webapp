const fs = require("fs");
const path = require("path");

class JsonTaskRepository {
  constructor() {
    this.filePath = path.join(__dirname, "../../data/tasks.json");
  }

  findAll() {
    const fileContent = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(fileContent);
  }

  save(task) {
    const tasks = this.findAll();
    tasks.push(task);
    this.writeAll(tasks);
    return task;
  }

  update(id, updatedTaskData) {
    const tasks = this.findAll();
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex === -1) {
      throw new Error("Task not found");
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...updatedTaskData,
      id: tasks[taskIndex].id
    };

    this.writeAll(tasks);
    return tasks[taskIndex];
  }

  updateStatus(id, status) {
    const tasks = this.findAll();
    const task = tasks.find((task) => task.id === Number(id));

    if (!task) {
      throw new Error("Task not found");
    }

    task.status = status;
    this.writeAll(tasks);

    return task;
  }

  delete(id) {
    const tasks = this.findAll();
    const filteredTasks = tasks.filter((task) => task.id !== Number(id));

    if (tasks.length === filteredTasks.length) {
      throw new Error("Task not found");
    }

    this.writeAll(filteredTasks);
  }

  writeAll(tasks) {
    fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2));
  }
}

module.exports = JsonTaskRepository;