const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const achievements = new mongoose.Schema({
    about_description: { type: String,  },
    address: { type: String,  },
    phone: { type: String,  },
    email: { type: String,  },
    facebook: { type: String,  },
    instagram: { type: String,  },
    youtube: { type: String,  },
});

// Explicitly naming the model to avoid collisions
const Footer = mongoose.models.Footer || mongoose.model('Footer', achievements);

module.exports = Footer;
