const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const session = require('express-session') 
const MongoStore = require('connect-mongo') 
const cors = require('cors') 
const productRoutes = require('./routes/productRoutes')

const app = express()

const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://127.0.0.1:27017/missha', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

app.use(session({
    secret: 'tainamaina',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/missha'
    }),
    cookie: {secure: false, maxAge: 3600000} 
}))

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});