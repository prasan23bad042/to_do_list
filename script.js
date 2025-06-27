// Sidebar Toggle
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

let isOpen = false;
toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  sidebar.style.left = isOpen ? "0" : "-180px";
});

// To-Do Logic
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter");

let currentFilter = "all";

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render the task list
function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (task.deleted) return false;
    if (currentFilter === "all") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "starred") return task.starred && !task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task-item");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.contentEditable = true;

    // Edit and Save
    span.addEventListener("blur", () => {
      task.text = span.textContent.trim();
      saveTasks();
    });

    span.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        span.blur();
      }
    });

    // Action Buttons
    const actions = document.createElement("div");
    actions.style.display = "flex";
    actions.style.gap = "8px"; // Add space between buttons

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.title = "Mark as Complete";
    completeBtn.onclick = () => {
      task.completed = true;
      saveTasks();
      renderTasks();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.title = "Delete Task..";
    deleteBtn.onclick = () => {
      task.deleted = true;
      saveTasks();
      renderTasks();
    };

    const starBtn = document.createElement("button");
    starBtn.textContent = task.starred ? "⭐" : "☆";
    starBtn.title = task.starred ? "Unstar Task" : "Star Task";
    starBtn.onclick = () => {
      task.starred = !task.starred;
      saveTasks();
      renderTasks();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    actions.appendChild(starBtn);

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    actions.appendChild(starBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

// Add Task
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    tasks.push({
      text: text,
      completed: false,
      deleted: false,
      starred: false,
    });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }
});

// Filter Buttons
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Initial render
renderTasks();

// Dark Mode Toggle Logic
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
  
  themeLabel.textContent = "☀️ Light Mode";
}

themeToggle.addEventListener("change", () => {
  const isDark = themeToggle.checked;
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeLabel.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});
