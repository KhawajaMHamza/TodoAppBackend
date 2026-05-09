# Todo App Backend API

A simple RESTful API for a Todo application built with Express.js and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas connection string)
- Postman (for testing the API)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
NODE_ENV=development
```

For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todoapp
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git in your project:
```bash
git init
git add .
git commit -m "Initial commit - Todo API Backend"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (leave as default)
   - **Output Directory**: `./` (leave as default)

### Step 3: Set Environment Variables in Vercel

In your Vercel project dashboard:

1. Go to **Project Settings** → **Environment Variables**
2. Add these variables:
   - `MONGODB_URI`: `mongodb+srv://Hamza:your_password@cluster0.3vor8jy.mongodb.net/todoapp?retryWrites=true&w=majority`
   - `DB_PASSWORD`: `your_mongodb_atlas_password`
   - `NODE_ENV`: `production`

### Step 4: Deploy

1. Click **Deploy**
2. Wait for deployment to complete
3. Your API will be available at: `https://your-project-name.vercel.app`

### Vercel Environment Variables

Make sure to set these in Vercel dashboard:
- `MONGODB_URI` - Your MongoDB Atlas connection string
- `DB_PASSWORD` - Your MongoDB Atlas password
- `NODE_ENV` - Set to `production`

## API Endpoints

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Base URL: `http://localhost:5000/api`

#### 1. **Get All Todos**
- **URL:** `/todos`
- **Method:** `GET`
- **Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "...",
      "title": "Buy groceries",
      "description": "Milk, bread, eggs",
      "completed": false,
      "priority": "high",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

#### 2. **Get Single Todo**
- **URL:** `/todos/:id`
- **Method:** `GET`
- **Parameters:** `id` - Todo ID
- **Response:** Single todo object

#### 3. **Create Todo**
- **URL:** `/todos`
- **Method:** `POST`
- **Body:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs",
  "priority": "high"
}
```
- **Response:** Created todo object

#### 4. **Update Todo**
- **URL:** `/todos/:id`
- **Method:** `PUT`
- **Parameters:** `id` - Todo ID
- **Body:**
```json
{
  "title": "Buy groceries",
  "completed": true,
  "priority": "medium"
}
```
- **Response:** Updated todo object

#### 5. **Delete Todo**
- **URL:** `/todos/:id`
- **Method:** `DELETE`
- **Parameters:** `id` - Todo ID
- **Response:** Deleted todo object

#### 6. **Health Check**
- **URL:** `/health`
- **Method:** `GET`
- **Response:**
```json
{
  "success": true,
  "message": "Server is running"
}
```

## Testing with Postman

### Step 1: Import Collection
1. Open Postman
2. Click on "Collections" → "Create New"
3. Name it "Todo API"

### Step 2: Set Up Environment Variables (Optional)
1. Click on "Environments" → "Create New"
2. Name it "Local"
3. Add variables:
   - `base_url`: `http://localhost:5000/api`
   - `todo_id`: (will be filled after creating a todo)

### Step 3: Create Test Requests

**GET All Todos**
- Method: `GET`
- URL: `http://localhost:5000/api/todos`

**CREATE Todo**
- Method: `POST`
- URL: `http://localhost:5000/api/todos`
- Header: `Content-Type: application/json`
- Body (JSON):
```json
{
  "title": "Learn Express",
  "description": "Master Express.js basics",
  "priority": "high"
}
```

**GET Single Todo**
- Method: `GET`
- URL: `http://localhost:5000/api/todos/YOUR_TODO_ID`

**UPDATE Todo**
- Method: `PUT`
- URL: `http://localhost:5000/api/todos/YOUR_TODO_ID`
- Header: `Content-Type: application/json`
- Body (JSON):
```json
{
  "completed": true,
  "priority": "low"
}
```

**DELETE Todo**
- Method: `DELETE`
- URL: `http://localhost:5000/api/todos/YOUR_TODO_ID`

## Project Structure

```
TodoApp(B)/
├── config/
│   └── database.js        # MongoDB connection
├── controllers/
│   └── todoController.js  # Business logic
├── models/
│   └── Todo.js           # Todo schema
├── routes/
│   └── todoRoutes.js     # API routes
├── server.js             # Main server file
├── package.json          # Dependencies
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## MongoDB Connection

### Local MongoDB:
```env
MONGODB_URI=mongodb://localhost:27017/todoapp
```

### MongoDB Atlas (Cloud):
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Update `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
```

## Environment Variables

Create a `.env` file with:
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)

## Error Handling

All endpoints return JSON responses with:
- `success` - Boolean indicating success/failure
- `message` - Descriptive message (if applicable)
- `data` - Response data (if applicable)
- `count` - Number of items (for list endpoints)

## Future Enhancements

- User authentication (JWT)
- User-specific todos
- Todo categories/tags
- Search and filtering
- Pagination
- Rate limiting
- Input validation middleware

## License

ISC
