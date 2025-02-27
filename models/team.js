const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const team = new mongoose.Schema({
    full_name:{type:String,required:true},
    subject: { type: String },
    experience: { type: String },
    color: { type: String },
    photo: { type: String },
    uploadedOn:{type:Date ,default:Date.now},
});

// Explicitly naming the model to avoid collisions
const Team = mongoose.models.Team || mongoose.model('Team', team);

module.exports = Team;
