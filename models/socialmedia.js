const mongoose = require('mongoose');

const SocialMediaSchema = new mongoose.Schema({
    link : { type: String },
});

// Explicitly naming the model to avoid collisions
const SocialMedia = mongoose.models.SocialMedia || mongoose.model('SocialMedia', SocialMediaSchema);

module.exports = SocialMedia;
