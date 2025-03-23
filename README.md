# KoolKanban 📪📋

A full-stack Kanban board application with secure login, built using React, Express, PostgreSQL, and JWT-based authentication.

## 🚀 Live Demo

🔗 [View the Live App](https://koolkanban-1.onrender.com)

🔗 [View the Backend API](https://koolkanban.onrender.com)

---

## 🧠 Features

- 🗪 Secure login with JSON Web Tokens (JWT)
- 🧱 Kanban board with tickets sorted by status
- 🔒 Protected API routes
- 📦 Token-based session handling (login/logout with expiration)
- 🌐 Full deployment using Render (frontend & backend)
- 🧪 Includes seed data for testing (users and tickets)

---

## 🛠️ Tech Stack

**Frontend**
- React + Vite
- React Router
- TypeScript
- jwt-decode

**Backend**
- Node.js + Express
- Sequelize + PostgreSQL
- JWT Authentication
- TypeScript

**Deployment**
- Render (Web Service + Static Site)
- Environment variables for configuration

---

## 📂 Project Structure

```
Develop/
├── client/         # React frontend
├── server/         # Express backend
│   ├── models/     # Sequelize models
│   ├── routes/     # API + auth routes
│   ├── seeds/      # Seed data scripts
│   └── middleware/ # Auth middleware
```

---

## 🔧 Environment Variables

### For Backend (`/server/.env`)
```
DB_NAME=kanban_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET_KEY=your_jwt_secret
SEED_ON_START=true
```

### For Frontend (`/client/.env`)
```
VITE_API_URL=https://koolkanban.onrender.com
```

---

## 🔐 Default Login (Seeded User)

```
Username: testuser
Password: password123
```

Use this after deploying to test login functionality with seeded data.

---

## 🥪 Testing the App Locally

```bash
# From root /Develop
npm install
npm run seed
npm run start:dev
```

Then visit `http://localhost:5173` to view the frontend.

---

## 🙌 Acknowledgements

- 💻 Starter code provided by [University of Utah Coding Bootcamp](https://bootcamps.learn.utoronto.ca/coding/)
- 🧠 JWT setup and validation inspired by official [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) docs
- 🧪 Testing API via [Insomnia](https://insomnia.rest/)
- 🌎 Hosting & deployment via [Render](https://render.com)
- 🤝 Thanks to instructional staff, TAs, and classmates for support and feedback throughout development

---

## 📜 License

This project is for educational purposes only and is not licensed for production use.

