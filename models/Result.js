const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const achievements = new mongoose.Schema({
    name: { type: String,  },
    subject: { type: String,  },
    exam_name: { type: String,  },
    rank: { type: String,  },
    identify: { type: String },
    marks_obt: { type: String },
    total_marks: { type: String },
    percentage: { type: String },
    ach_1: { type: String },
    ach_2: { type: String },
    color: { type: String },
    photo: { type: String },
});

// Explicitly naming the model to avoid collisions
const Result = mongoose.models.Result || mongoose.model('Result', achievements);

module.exports = Result;
