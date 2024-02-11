require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './client/dist')));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"));
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log(`Node API app is running on port ${port}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Import route handlers
const loginRoutes = require('./routes/loginRoutes');
const signupRoutes = require('./routes/signupRoutes');

// Use routes
app.use('/', loginRoutes);
app.use('/', signupRoutes);
