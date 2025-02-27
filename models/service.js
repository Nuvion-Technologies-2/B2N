const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    photo: { type: String, required: true },
    active: { type: Boolean, default: true },
    uploadedOn:{type:Date,default:Date.now},
});

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

module.exports = Service;
