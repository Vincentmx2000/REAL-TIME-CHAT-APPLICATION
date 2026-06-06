# 💬 Real-Time Chat Application

A fully responsive, real-time multi-user chat web application built with **React.js**, **Node.js**, **Express**, and **Socket.IO**.

---

## 📌 Overview

This project demonstrates real-time, bi-directional communication between clients using WebSockets. Unlike traditional HTTP-based apps, it uses an event-driven architecture to enable instant message delivery — no page refresh required.

Built as a learning and portfolio project to explore full-stack development concepts including state management, client-server communication, and UI responsiveness.

---

## ✨ Features

- 🔴 Real-time messaging via Socket.IO WebSockets
- 👤 Username-based login with random avatar assignment
- 💾 Session persistence using localStorage
- 🔒 Simple logout with session clear
- 📱 Fully responsive and mobile-friendly UI
- 🎨 Clean, modern chat interface (sent messages right, received left)

---

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React.js, Custom CSS              |
| Backend   | Node.js, Express                  |
| Real-Time | Socket.IO (WebSockets)            |
| Utilities | Lodash, Picsum Photos (avatars)   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Running the App

```bash
# Start the backend server
cd server
node index.js

# Start the frontend (in a new terminal)
cd client
npm start
```

Open `http://localhost:3000` in your browser.

---

## 📸 Screenshots

> Login screen, chat interface, and multi-user messaging in action.

![Chat Screenshot 1](https://github.com/user-attachments/assets/f45fae45-6b1a-4cb7-9105-cddeb2cb8e17)
![Chat Screenshot 2](https://github.com/user-attachments/assets/d729c120-f7e4-4c47-8b0d-26ba03b80a15)
![Chat Screenshot 3](https://github.com/user-attachments/assets/be509c39-39f1-4684-9d8b-cc1a56ad8e83)
![Chat Screenshot 4](https://github.com/user-attachments/assets/9ca18cd6-f9fc-4cb1-92e5-afc646b22db9)

---

## 📚 What I Learned

- How WebSocket connections differ from standard HTTP
- Setting up a Socket.IO server with Node.js/Express
- Managing real-time state in React
- Persisting user sessions with localStorage
- Designing a responsive chat UI

---

## 📄 License

This project is licensed for **educational and personal learning purposes only**.  
Not intended for commercial use.

```
MIT License — free to use, modify, and learn from.
```

---

## 👨‍💻 Author

**Vincent A** — Full-Stack Developer (Learner)  
[GitHub](https://github.com/your-username) · [LinkedIn](https://linkedin.com/in/your-profile)
