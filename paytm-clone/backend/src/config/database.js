const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { login } = require('../controllers/userController');
login
const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
};



const tuteschema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }
})

const collection=new mongoose.model('data',tuteschema);

collection.insertMany([])

module.exports = connectDB;