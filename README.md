# 🚀 Passport + JWT Authentication (Node.js)

## 📌 Overview
This project demonstrates basic authentication using:
- Passport.js
- JSON Web Tokens (JWT)
- Express.js

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Run the Project

```bash
node app.js
```

Server will start at:
```
http://localhost:3000
```

---

## 🔐 API Endpoints

### 1. Login
**POST** `/login`

Request:
```json
{
  "username": "admin",
  "password": "1234"
}
```

Response:
```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

---

### 2. Protected Route
**GET** `/dashboard`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "message": "Welcome to dashboard",
  "user": { "id": 1 }
}
```

---

## 🧠 Flow
1. User logs in
2. Server generates JWT token
3. Client stores token
4. Token sent in Authorization header
5. Passport verifies token
6. Access granted

---

## 📦 Dependencies
- express
- passport
- passport-jwt
- jsonwebtoken
- body-parser

---

## ⚡ Future Improvements
- Add MongoDB
- Use bcrypt for password hashing
- Add refresh tokens
- Use environment variables

---

## 👨‍💻 Author
Vivek SP

### Commands
git init
git add .
git commit -m "Initial commit - Passport JWT Auth"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
