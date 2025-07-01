# 🧩 Backend - Redux To-Do App (NestJS + Prisma + MySQL)

This is the backend service for the Redux-based To-Do List application. It provides a RESTful API for managing tasks using NestJS, Prisma ORM, and a MySQL database.

---

## 🚀 Features

- RESTful API for CRUD operations on To-Do items
- MySQL database integration via Prisma ORM
- Clean modular architecture using NestJS
- DTO-based input validation
- Prisma schema and migrations for database structure

---

## 🛠 Tech Stack

- [NestJS](https://nestjs.com/) – Progressive Node.js framework
- [Prisma](https://www.prisma.io/) – Type-safe ORM for Node.js and TypeScript
- [MySQL](https://www.mysql.com/) – Relational database
- TypeScript

---

## 📁 Project Structure
```
src/
├── todo/
│ ├── dto/
│ │ ├── create-todo.dto.ts
│ │ └── update-todo.dto.ts
│ ├── todo.controller.ts
│ ├── todo.service.ts
│ └── todo.module.ts
├── prisma/
│ └── prisma.service.ts
├── app.module.ts
└── main.ts

```
---

## ⚙️ Installation

1. **Clone the repository:**

`git clone https://github.com/Deepakgauttam/To-Do-list-redux.git` 
Go to the backend project directory.
`cd redux-todo-backend`


Install dependencies:
`yarn install`


🛠 Setup Environment
Create a `.env file` in the root directory with the following content:

`DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/tododb"`

Replace `USER, PASSWORD, and tododb` with your MySQL credentials.

🔧 Prisma Setup
Initialize Prisma (if not already done):
`npx prisma init`

Run database migration:
`npx prisma migrate dev --name init`

Generate Prisma Client:
`npx prisma generate`

▶️ Running the App
`yarn run start:dev`

The app will start on: `http://localhost:3000`




