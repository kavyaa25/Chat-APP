# 💬 ChatGPT Clone – Full‑Stack AI Chat Application

A modern full‑stack conversational AI web application inspired by ChatGPT — built using **React (Vite) + TailwindCSS** on the frontend and **Node.js (Express)** on the backend.  
It features a clean architecture, modular design, streaming AI responses, chat session management, and dark/light themes.

---

## ✨ Features Overview

### 🧠 Backend (Node.js + Express)
- Modular clean architecture (controllers, services, middleware, routes).
- Chat session management with rename & delete.
- In‑memory message history persistence.
- Mock AI response generator with table output.
- Streaming‑style response simulation.
- Rate‑limiting and request logging middleware.

### 🎨 Frontend (React + TailwindCSS)
- Fully responsive layout with **sidebar + chat window UI**.
- Smooth message streaming (typing effect).
- Syntax highlighting for AI outputs.
- Session persistence and management.
- Like/Dislike message rating system (mock API).
- Dark/Light mode with persistent theme context.
- Beautiful, minimalistic design for both desktop and mobile.

---

## 🧩 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React, TailwindCSS, Axios, React Syntax Highlighter |
| **Backend** | Node.js, Express, Morgan, Express‑Rate‑Limit, CORS |
| **Architecture** | MVC + Service Layer + Middleware |
| **Database** | In‑Memory (mock database for demonstration) |

---

## 🚀 Quick Start Guide

### 1️⃣ Clone the Repository
git clone https://github.com/kavyaa25/Chat-APP.git
cd Chat-APP


---

### 2️⃣ Setup Backend

cd chatgpt-clone-backend
npm install
npm start

The backend runs at [**http://localhost:5000**](http://localhost:5000)

#### Available API Routes
| Route | Method | Description |
|--------|---------|-------------|
| `/api/sessions` | GET | List all chat sessions |
| `/api/sessions` | POST | Create new session |
| `/api/sessions/:id` | GET | Get messages of a session |
| `/api/sessions/:id` | PUT | Rename session |
| `/api/sessions/:id` | DELETE | Delete session |
| `/api/chat/:id` | POST | Send chat message |
| `/api/feedback/:sessionId/:index` | POST | Rate a message (like/dislike) |

---

### 3️⃣ Setup Frontend
cd ../chatgpt-clone-frontend
npm install
npm start


The frontend runs at [**http://localhost:5173**](http://localhost:5173)

Vite provides hot‑reloading, and Tailwind ensures an elegant experience out‑of‑the‑box.

---

## 🧱 Folder Structure

### 📂 Backend
chatgpt-clone-backend/
│── server.js
│── /config/ → Logger configuration
│── /controllers/ → Chat, session & feedback logic
│── /routes/ → RESTful API routing
│── /services/ → Business logic layer
│── /middleware/ → Rate‑limit + request logging
│── /data/ → In‑memory mock database
│── /utils/ → Helper utilities


### 💡 Frontend
chatgpt-clone-frontend/
│── /src/
│ ├── /components/ → Sidebar, ChatWindow, Messages, Loader
│ ├── /pages/ → ChatPage
│ ├── /services/ → API wrappers & stream simulation
│ ├── /context/ → Theme management
│ ├── /hooks/ → Custom chat logic (useChat)
│ └── index.js, App.js, index.css


---

## 🎯 Key Architectural Highlights

### ✅ Clean Separation of Concerns
- **Controllers** handle API endpoints.
- **Services** encapsulate business logic.
- **Middleware** handles request validation and limits.
- **Frontend hooks and context** separate state, API calls, and UI.

### 🧩 Stream Simulation
The `streamSimulator.js` mimics a ChatGPT‑style typing effect by streaming characters over time, enhancing interactivity without real WebSockets.

### 🌗 Theme Management
Using `ThemeContext`, the app remembers user preference (light/dark mode) via `localStorage`.

---

## 🧠 Example Workflow

1. Start a new chat session.  
2. Send a prompt — the backend (mock AI) generates a structured response.  
3. The frontend streams the response character‑by‑character with smooth typing effect.  
4. You can rename or delete sessions and toggle theme anytime.  
5. Rate responses using 👍 or 👎 icons (mock API handled in backend).

---

## 📦 Dependencies

**Backend**
- express  
- cors  
- morgan  
- express-rate-limit  
- nodemon (dev)

**Frontend**
- react, vite  
- tailwindcss, postcss, autoprefixer  
- axios  
- react-syntax-highlighter  
- react-router-dom

---

## 🛠 Development Notes

- Data is stored in-memory, meaning sessions/messages reset on restart.  
- This project is built for educational and portfolio demonstration purposes.  
- The structure allows easy transition to a database or real AI model (like OpenAI API).

---

## 👩‍💻 Author

**Kavya**  
Aspiring Full‑Stack Developer | React & Node.js Enthusiast  
[GitHub Profile](https://github.com/kavyaa25)

---

## 🏁 Future Enhancements

- Integrate OpenAI or Gemini APIs for real responses.  
- Add persistent storage using PostgreSQL or MongoDB.  
- Implement WebSocket streaming for true real‑time replies.  
- Add message search, export, and markdown rendering.

---

## 🌟 Showcase

Run `npm run dev` on both frontend and backend folders, then visit:

➡ **Frontend:** http://localhost:5173  
➡ **Backend:** http://localhost:5000/api  

Enjoy a full-featured, modern ChatGPT‑like experience built fully from scratch!
