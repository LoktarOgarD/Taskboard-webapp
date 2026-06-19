const API_URL = "http://localhost:3000/api/tasks";

let currentPriorityFilter = "all";

async function loadTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  renderTasks(tasks);
}

function renderTasks(tasks) {
  const todoTasks = document.getElementById("todo-tasks");
  const inProgressTasks = document.getElementById("in-progress-tasks");
  const doneTasks = document.getElementById("done-tasks");

  todoTasks.innerHTML = "";
  inProgressTasks.innerHTML = "";
  doneTasks.innerHTML = "";

  const filteredTasks = filterTasksByPriority(tasks);

  const todoCount = filteredTasks.filter((task) => task.status === "todo").length;
  const inProgressCount = filteredTasks.filter((task) => task.status === "in-progress").length;
  const doneCount = filteredTasks.filter((task) => task.status === "done").length;

  document.getElementById("todo-count").textContent = `(${todoCount})`;
  document.getElementById("in-progress-count").textContent = `(${inProgressCount})`;
  document.getElementById("done-count").textContent = `(${doneCount})`;

  filteredTasks.forEach((task) => {
    const taskElement = createTaskElement(task);

    if (task.status === "todo") {
      todoTasks.appendChild(taskElement);
    }

    if (task.status === "in-progress") {
      inProgressTasks.appendChild(taskElement);
    }

    if (task.status === "done") {
      doneTasks.appendChild(taskElement);
    }
  });
}

function filterTasksByPriority(tasks) {
  if (currentPriorityFilter === "all") {
    return tasks;
  }

  return tasks.filter((task) => task.priority === currentPriorityFilter);
}

function setPriorityFilter(priority) {
  currentPriorityFilter = priority;
  loadTasks();
}

function createTaskElement(task) {
  const article = document.createElement("article");
  article.className = `task-card priority-${task.priority}`;

  article.innerHTML = `
    <div class="task-card-header">
      <h3>${task.title}</h3>
      <span class="priority-badge">${task.priority}</span>
    </div>

    <p>${task.description}</p>

    <div class="task-meta">
      <p><strong>Status:</strong> ${task.status}</p>
      <p><strong>Priorität:</strong> ${task.priority}</p>
    </div>

    <div class="task-actions">
      <button onclick="changeStatus(${task.id}, 'todo')">To Do</button>
      <button onclick="changeStatus(${task.id}, 'in-progress')">In Progress</button>
      <button onclick="changeStatus(${task.id}, 'done')">Done</button>
      <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
    </div>
  `;

  return article;
}

async function createTask(event) {
  event.preventDefault();

  const titleInput = document.getElementById("task-title");
  const descriptionInput = document.getElementById("task-description");
  const priorityInput = document.getElementById("task-priority");

  const title = titleInput.value.trim();

  if (title === "") {
    alert("Bitte gib einen Titel ein.");
    return;
  }

  const newTask = {
    title: title,
    description: descriptionInput.value.trim(),
    priority: priorityInput.value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  });

  titleInput.value = "";
  descriptionInput.value = "";
  priorityInput.value = "medium";

  loadTasks();
}

async function changeStatus(id, status) {
  await fetch(`${API_URL}/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status: status })
  });

  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  loadTasks();
}

document.getElementById("task-form").addEventListener("submit", createTask);

loadTasks();