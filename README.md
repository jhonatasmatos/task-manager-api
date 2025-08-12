# Express.js Task Manager API Challenge

## 🎯 Learning Objectives

- Master Express routing patterns
- Design effective middleware chains
- Implement professional error handling
- Structure a maintainable Express application

## 🛠️ Technologies and Tools

[Nodejs](https://nodejs.org/en/download)
[Express](https://expressjs.com/)
[TypeScript](https://www.typescriptlang.org/)

## 📋 Project Requirements

### 1. Core Routes Implementation

Implement these task management endpoints:

```http
GET    /tasks       - List all tasks (support filtering)
POST   /tasks       - Create new task
GET    /tasks/:id   - Get single task
PATCH  /tasks/:id   - Partial update
DELETE /tasks/:id   - Delete task
```

### 2. Required Middlewares

| Middleware   | Implementation Details                                                      |
| ------------ | --------------------------------------------------------------------------- |
| validateTask | Validate title (required, min 3 chars) and status (enum: PENDING/COMPLETED) |

### 3. Data Management

```javascript
let tasks = [
  {
    id: "1",
    title: "Learn middleware",
    status: "IN_PROGRESS",
    createdAt: "2023-11-20T10:00:00Z",
  },
];
```

## 📂 Mandatory Project Structure

```bash
src/
├── services/
│ └── tasks.service.ts # Route handlers
├── middlewares/
│ └──validation.middleware.ts
├── routes/
│ └── tasks.route.ts # Router configuration
├── types/
│ └── task.type.ts # Type definitions
├── app.ts # Express setup
└── server.ts # Server bootstrap
```

## 🔧 Technical Specifications

1. Validation Rules:

   POST: Requires title

   PATCH: Only allows status and title updates

2. Error Handling:

   400: Include validation error details

   404: Standard "Resource not found" message

## ✅ Validation Checklist

- [x] Created basic folder structure (src/controllers, src/routes, etc.)
- [x] Configured TypeScript (tsconfig.json)
- [x] Initialized Express app (app.ts + server.ts)
- [x] Defined Task interface (types/task.type.ts)
- [x] Implemented in-memory "database" with mock tasks
- [x] GET /tasks - List all tasks
- [x] GET /tasks/:id - Get single task (404 if not found)
- [x] POST /tasks - Create new task with validation
- [x] PATCH /tasks/:id - Update task status
- [x] DELETE /tasks/:id - Remove task
- [x] Request validation (validateTask), Error handling middleware

## 🚀 Setup & Execution

```bash
# Initialize project
npm init -y
npm install express typescript @types/node @types/express
npx tsc --init

# Development
npm install --save-dev nodemon
npm run dev  # Add "dev": "nodemon src/server.ts" to package.json
```
