const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const achievements = new mongoose.Schema({
    title: { type: String,  },
    description: { type: String,  },
    color: { type: String,  },
    icon: { type: String,  },
    identify: { type: String },
    constraint: { type: String },
    image: { type: String },
});

// Explicitly naming the model to avoid collisions
const Details = mongoose.models.Details || mongoose.model('Details', achievements);

module.exports = Details;
