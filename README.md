# 🚀 TaskFlow - MERN Task Management Application

TaskFlow is a full-stack task management application built using the MERN Stack. It allows users to securely manage their daily tasks with authentication, task priorities, due dates, search, and filtering.

---

## 📌 Features

- 🔐 User Authentication (JWT)
- 👤 Register & Login
- ➕ Create Tasks
- ✏️ Edit Tasks
- 🗑️ Delete Tasks
- 🔍 Search Tasks
- 🎯 Filter by Priority
- 📅 Due Dates
- 📊 Dashboard Statistics
- 🔔 Toast Notifications
- 🔒 Protected Routes
- 💾 MongoDB Atlas Database

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

### Database
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
TaskFlow-MERN/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/khushishetiya04/TaskFlow-MERN.git
```

### Install Dependencies

Backend

```bash
cd server
npm install
```

Frontend

```bash
cd client
npm install
```

---

## ▶️ Run the Project

Backend

```bash
cd server
npm run dev
```

Frontend

```bash
cd client
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📸 Screenshots

Add screenshots here after completing the UI.

Example:

- Login Page
- Register Page
- Dashboard
- Add Task
- Search & Filter

---

## 🚀 Future Improvements

- Task Categories
- Dark Mode
- Pagination
- Drag & Drop Tasks
- Email Reminders
- Profile Management

---

## 👩‍💻 Author

**Khushi Paras Shetiya**

GitHub: https://github.com/khushishetiya04

LinkedIn: *(Add your LinkedIn profile link here once created)*

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub.