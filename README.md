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
- Prisma ORM (PostgreSQL)
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

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL (or SQLite for development)

## ⚡ Quick Start Guide

### 1️⃣ Start Backend Server

```bash
cd backend

# Install dependencies
npm install

# Setup database
cp .env.example .env
# Edit .env and set DATABASE_URL:
# For PostgreSQL: DATABASE_URL="postgresql://user:password@localhost:5432/quiz_db"

# Run database migrations
npx prisma migrate dev

# Start the backend server
npm run start:dev
```

✅ **Backend running on `http://localhost:4000`**

### 2️⃣ Start Frontend Server

```bash
cd frontend

# Install dependencies
npm install

# Setup environment
echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:4000" > .env

# Start the frontend dev server
npm run dev
```

✅ **Frontend running on `http://localhost:3000`**

### 3️⃣ Setup Database
**PostgreSQL**
```bash
# Install PostgreSQL and create database
createdb quiz_db

# In backend/.env file:
DATABASE_URL="postgresql://username:password@localhost:5432/quiz_db"

# Run migrations
cd backend
npx prisma migrate dev
```

### 4️⃣ Create Sample Quiz
1. Open `http://localhost:3000`
2. Click **"Create New Quiz"** button
3. Enter quiz title: `"My First Quiz"`
4. Click **"Add Your First Question"**
5. Fill in the question:
   - **Title:** "Is JavaScript a programming language?"
   - **Type:** True/False
   - **Correct Answer:** True
6. Click **"Create Quiz"**
7. View your quiz in the **"All Quizzes"** page
