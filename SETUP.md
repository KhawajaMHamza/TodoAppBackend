# SETUP GUIDE - Todo App Backend

## ✅ What's Been Created

Your Todo App backend is now ready! Here's what was set up:

### 📁 Project Structure
```
TodoApp(B)/
├── config/
│   └── database.js              # MongoDB connection config
├── controllers/
│   └── todoController.js        # All business logic
├── models/
│   └── Todo.js                  # Mongoose schema
├── routes/
│   └── todoRoutes.js            # API endpoints
├── server.js                    # Main Express server
├── package.json                 # Dependencies
├── .env                         # Environment variables
├── .gitignore                   # Git ignore
├── README.md                    # Full documentation
└── Postman_Collection.json      # Ready to import in Postman
```

### 📦 Installed Libraries
- **express** - Web framework
- **mongoose** - MongoDB ORM
- **dotenv** - Environment variables
- **cors** - Cross-Origin requests
- **body-parser** - Parse request bodies
- **nodemon** - Auto-reload server (dev)

---

## 🚀 QUICK START STEPS

### Step 1: Configure MongoDB Connection

Edit the `.env` file in your project root:

**For Local MongoDB:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
NODE_ENV=development
```

### Step 2: Start the Server

```bash
npm run dev
```

You'll see:
```
Server running on port 5000
Environment: development
MongoDB Connected: localhost
```

### Step 3: Test in Postman

#### Option A: Import Collection (Recommended)
1. Open **Postman**
2. Click **File → Import**
3. Select `Postman_Collection.json` from your project folder
4. All endpoints are ready to test!

#### Option B: Manual Setup
1. Create a new request in Postman
2. Set method to `GET`
3. Enter URL: `http://localhost:5000/api/todos`
4. Click **Send**

---

## 📝 API Endpoints to Test

### 1. Health Check
```
GET http://localhost:5000/api/health
```

### 2. Get All Todos
```
GET http://localhost:5000/api/todos
```

### 3. Create Todo
```
POST http://localhost:5000/api/todos
```
**Body (JSON):**
```json
{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs",
  "priority": "high"
}
```

### 4. Get Single Todo
```
GET http://localhost:5000/api/todos/{id}
```
Replace `{id}` with actual todo ID

### 5. Update Todo
```
PUT http://localhost:5000/api/todos/{id}
```
**Body (JSON):**
```json
{
  "completed": true,
  "priority": "low"
}
```

### 6. Delete Todo
```
DELETE http://localhost:5000/api/todos/{id}
```

---

## 🛠️ MongoDB Setup

### If MongoDB is NOT running:

**Windows:**
1. Download from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install with default settings
3. MongoDB starts automatically as a service

**Or use MongoDB Atlas (Free Cloud):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string
5. Update `.env` file

---

## ⚙️ Environment Variables

The `.env` file contains:
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment mode (development/production)

---

## 📌 Important Notes

✅ **Server Status:** All endpoints return JSON with `success` flag
✅ **Error Handling:** Proper error messages for debugging
✅ **MongoDB:** Data persists in your database
✅ **CORS:** Enabled for frontend integration
✅ **Timestamps:** All todos have `createdAt` and `updatedAt`

---

## 🐛 Troubleshooting

**Port Already in Use:**
- Change PORT in `.env` file to another port (e.g., 5001)

**MongoDB Connection Error:**
- Check if MongoDB is running
- Verify connection string in `.env`
- Check username/password for Atlas

**CORS Error in Frontend:**
- CORS is already enabled in server.js
- You can add specific origins if needed

**Nodemon Not Working:**
- Make sure you have dev dependencies: `npm install`
- Use `npm run dev` to start with nodemon

---

## 🎯 Next Steps

1. ✅ Start the server with `npm run dev`
2. ✅ Test all endpoints in Postman
3. ✅ Connect your frontend to these APIs
4. ✅ Add user authentication (optional)
5. ✅ Deploy to production

---

## 📚 Full Documentation

See `README.md` for complete API documentation and more details.

Happy coding! 🚀
