```markdown
# 📝 Realtime Collaborative Editor - Frontend

This is the frontend UI for the **Realtime Collaborative Realtime Text Editor**.

Multiple users can type together in the same document — changes are synced instantly using Socket.io and persisted to PostgreSQL.

---

## 🚀 Tech Stack
- React + Vite
- Socket.io Client
- Deployed on **Vercel**

---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone Repo
```bash
git clone https://github.com/SushanthMusham/realtime-editor-frontend
cd realtime-editor-frontend


2️⃣ Install Dependencies
npm install


3️⃣ Update Backend URL
File: src/socket.js
export const socket = io("https://realtime-editor-backend-h48m.onrender.com", {
  autoConnect: false
});

4️⃣ Start App
npm run dev
Runs on:
http://localhost:5173

Runs on:
http://localhost:5173


🧭 Usage
Open:
https://realtime-editor-frontend-ashen.vercel.app
Then go to:
/doc/test-doc-123

Example:
https://realtime-editor-frontend-ashen.vercel.app/doc/test-doc-123


Open same URL in 2 tabs → Start typing → Enjoy realtime sync 😎


📌 Features
✔️ Realtime typing sync
✔️ Works across browsers
✔️ Backend persistence
✔️ Production ready
✔️ Simple & clean UI


🌍 Production Deployment
Frontend hosted on Vercel:
https://realtime-editor-frontend-ashen.vercel.app

Backend hosted on Render:
https://realtime-editor-backend-h48m.onrender.com

✨ Author
Sushanth Musham
IIT Bhubaneswar
