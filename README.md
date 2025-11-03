📘 Bookmark Manager — NestJS Project
🧩 Overview

A simple yet structured Bookmark Manager API built with NestJS and TypeScript.
It allows users to create, read, update, and delete bookmarks in memory.
The project demonstrates NestJS architecture, dependency injection, and DTO-based validation.

- Features
- Create new bookmarks
- Retrieve all bookmarks
- Find a bookmark by ID
- Update a bookmark’s description
- Delete a bookmark
- Built with TypeScript, NestJS decorators, and dependency injection
- Ready for database integration (e.g., Prisma, TypeORM)


📂 Project Structure
src/
├── bookmarks/
│   ├── dto/
│   │   └── create-bookmark.dto.ts
│   ├── bookmark.interface.ts
│   ├── bookmarks.controller.ts
│   ├── bookmarks.service.ts
│   └── bookmarks.module.ts
├── app.module.ts
└── main.ts


⚙️ Installation & Setup

# 1️⃣ Clone the repository
git clone https://github.com/Mehdibahrami1990/Bookmark-manager.git

# 2️⃣ Navigate into the folder
cd bookmark-manager

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run start:dev

📡 API Endpoints
Method	Endpoint	Description
GET	/bookmarks	Get all bookmarks
GET	/bookmarks/:id	Get bookmark by ID
POST	/bookmarks	Create a new bookmark
PATCH	/bookmarks/:id	Update bookmark description
DELETE	/bookmarks/:id	Delete a bookmark

🧪 Testing with Postman

You can test all endpoints using Postman
 or curl.

 🔧 Known Improvements

Add persistence with a database (e.g., PostgreSQL + Prisma)
Add validation using class-validator
Add authentication (JWT)
Write unit tests with Jest

🧑‍💻 Author

Mehdi Bahrami
Front-End & Fullstack Developer
📧 mehdi.bahrami11990@gmail.com

🔗 GitHub
 | LinkedIn