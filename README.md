# To-Do List Web Application 📝  
### HTML | CSS | JavaScript | LocalStorage

This is a **fully functional To-Do List web application** built using **vanilla HTML, CSS, and JavaScript**.  
The app helps users manage daily tasks with features such as task creation, completion tracking, starring, trash management, and dark mode support — all stored locally using the browser’s **LocalStorage**.

---

## 📌 Overview

The To-Do List application is designed to improve productivity by allowing users to:

- Add and edit tasks
- Mark tasks as completed
- Star important tasks
- Soft-delete tasks and manage them in Trash
- Permanently delete tasks
- Switch between light and dark mode
- Navigate easily using a sidebar menu

The application works entirely on the client side and **does not require any backend or database**.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit tasks inline
- ✅ Mark tasks as completed
- ⭐ Star / unstar important tasks
- 🗑️ Soft delete tasks (move to Trash)
- ❌ Permanently delete tasks from Trash
- 📂 Separate pages for:
  - All Tasks
  - Completed Tasks
  - Starred Tasks
  - Trash
- 🌙 Dark mode / Light mode toggle
- 💾 Persistent data using LocalStorage
- 📱 Responsive and user-friendly UI
- 📑 Sidebar navigation with toggle button

---

## 🧑‍💻 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Font Awesome Icons**
- **Browser LocalStorage**

---

## 🧠 How It Works

- Tasks are stored as JavaScript objects in an array
- The array is saved in `localStorage` to persist data
- Each task contains:
  - Task text
  - Completed status
  - Starred status
  - Deleted status
- Different pages filter tasks based on their state
- UI updates dynamically without page reloads

---

## ▶️ How to Run the Application

1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/to_do_list.git
