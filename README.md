# 🚀 TaskyPingu – Task Management System

A modern and responsive full-stack web app for managing tasks, tracking progress, and collaborating in teams.

## 🌟 Features

- 👤 **User Dashboard** – View assigned tasks, monitor progress, and see summaries
- ✅ **Task Management** – Create, update, and organize tasks with priorities and due dates
- ⚙️ **Automated Status** – Tasks auto-update based on checklist completion
- 🤝 **Team Collaboration** – Assign tasks to one or more users with full traceability
- 🔥 **Priority Tracking** – Track task urgency and progress visually
- 📄 **Task Report Downloads** – Export summaries and detailed task reports
- 📎 **Attachments Support** – Add and manage file links within tasks
- 📱 **Mobile Responsive** – Clean UI for desktop, tablet, and mobile
- 🧭 **Sidebar Navigation** – Fast access to dashboard, tasks, and settings

---

## 🛠 Tech Stack

| Layer       | Tech                        |
|-------------|-----------------------------|
| Frontend    | React.js, Vite, TailwindCSS |
| Backend     | Node.js, Express.js         |
| Database    | MongoDB + Mongoose          |
| UI Library  | ShadCN + Remix Icons        |
| Auth        | JWT                         |
| Hosting     | Vercel (Frontend), Render (API)

---

## 📁 Folder Structure

taskypingu/
├── frontend/ # React + Vite Frontend
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ ├── utils/
│ └── App.jsx
├── backend/ # Express.js Backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── server.js