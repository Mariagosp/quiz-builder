# Quiz Builder

A full-stack web application for creating and managing custom quizzes. Users can add questions of different types, view all quizzes, and see quiz details.

## Tech Stack
**Frontend**
- Next.js
- TypeScript
- React Hook Form

**Backend**
- NESTJS
- TypeScript
- Prisma ORM (PostgreSQL or SQLite)
- REST API

## Features

- Create quizzes with multiple question types:
  - Boolean (True/False)
  - Input (Short text)
  - Checkbox (Multiple choice)
- View all quizzes with question count
- Delete quizzes
- View quiz details (read-only)

## Getting Started

0. Make sure you have 

- Node.js 18+
- npm or yarn
- PostgreSQL

### Backend

1. Navigate to the backend folder:

```bash
cd backend
npm install
```

2. Create .env file and add DATABASE_URL in it

3. To run: 
```bash
npm run start:dev
```

### Frontend

1. Navigate to th frontend folder:
```bash
cd frontend
npm install
```

2. Create env file and add NEXT_PUBLIC_BACKEND_URL

3. To run:
```bash
npm run dev
```