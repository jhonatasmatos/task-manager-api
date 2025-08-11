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
PUT    /tasks/:id   - Full task update
PATCH  /tasks/:id   - Partial update
DELETE /tasks/:id   - Delete task
```

### 2. Required Middlewares

| Middleware        | Implementation Details                                                                  |
| ----------------- | --------------------------------------------------------------------------------------- |
| validateTaskInput | Validate title (required, min 3 chars) and status (enum: PENDING/IN_PROGRESS/COMPLETED) |
| logRequest        | Log [TIMESTAMP] METHOD /path to console                                                 |
| errorHandler      | Standard JSON error format: { error: string, requestId?: string }                       |
| notFoundHandler   | Return consistent 404 format for unhandled routes                                       |

### 3. Data Management

```javascript
let tasks = [
  {
    id: "1",
    title: "Learn middleware",
    description: "Practice Express middlewares",
    status: "IN_PROGRESS",
    createdAt: "2023-11-20T10:00:00Z",
  },
];
```

### 4. Advanced Features

Filtering: GET /tasks?status=COMPLETED
Pagination: GET /tasks?limit=5&offset=0
Error Types:

```javascript
interface ApiError {
  status: 400 | 404 | 500;
  message: string;
  details?: object;
}
```

## 📂 Mandatory Project Structure

```bash
src/
├── controllers/
│ └── tasks.controller.ts # Route handlers
├── middlewares/
│ ├── validation.middleware.ts
│ └── error.middleware.ts
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

   PATCH: Only allows status and description updates

   PUT: Requires all fields

2. Error Handling:

   400: Include validation error details

   404: Standard "Resource not found" message

   500: Log full error server-side, return generic client message

3. Response Format:

```json
{
  "data": {} | [],
  "meta": {
    "count": 0,
    "next": "/tasks?offset=10"
  }
}
```

## ✅ Validation Checklist

- [x] Created basic folder structure (src/controllers, src/routes, etc.)
- [x] Configured TypeScript (tsconfig.json)
- [x] Initialized Express app (app.ts + server.ts)
- [x] Defined Task interface (types/task.type.ts)
- [x] Implemented in-memory "database" with mock tasks
- [x] GET /tasks - List all tasks
- [x] POST /tasks - Create new task with validation
- [ ] PATCH /tasks/:id - Update task status
- [ ] DELETE /tasks/:id - Remove task
- [ ] Request validation (validateTask), Error handling middleware
- [ ] Request logging

Advanced Features (opcional)

- [ ] Add pagination (limit/offset)
- [ ] Implement task filtering (?status=DONE)
- [ ] Add Swagger documentation

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
