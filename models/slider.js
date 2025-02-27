const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const achievements = new mongoose.Schema({
    title: { type: String,  },
    description: { type: String,  },
    color: { type: String,  },
    cta_text: { type: String,  },
    image: { type: String },
});

// Explicitly naming the model to avoid collisions
const Slider = mongoose.models.Slider || mongoose.model('Slider', achievements);

module.exports = Slider;
