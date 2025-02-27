const mongoose = require('mongoose');

const galleryschema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    color: { type: String },
});

// Explicitly naming the model to avoid collisions
const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', galleryschema);

module.exports = Gallery;
