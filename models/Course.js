const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const achievements = new mongoose.Schema({
    title: { type: String,  },
    duration: { type: String,  },
    description: { type: String,  },
    color: { type: String },
    feature1: { type: String },
    feature2: { type: String },
    feature3: { type: String },
    image: { type: String },
});

// Explicitly naming the model to avoid collisions
const Course = mongoose.models.Course || mongoose.model('Course', achievements);

module.exports = Course;
