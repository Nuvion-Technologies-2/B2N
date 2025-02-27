const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS library
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json({ limit: '100000mb' })); // Use Express' built-in JSON parser
app.use(express.urlencoded({ limit: '100000mb', extended: true })); // For URL-encoded data

// CORS configuration
app.use(cors({
    origin: '*', // For production, you should specify a list of allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true // Allow cookies if needed for authentication
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
// app.use('/achievements', express.static('achievements'));
// app.use('/blogs', express.static('blogs'));
// app.use('/events', express.static('events'));
// app.use('/gallery', express.static('gallery'));
// app.use('/clients', express.static('clients'));
// app.use('/services', express.static('services'));
// app.use('/teams', express.static('teams'));
// app.use('/moox_events/api/service', require('./routes/serviceRoutes'));
// app.use('/moox_events/api/client', require('./routes/clientRoutes'));
// app.use('/moox_events/api/gallery', require('./routes/galleryRoutes'));
// app.use('/moox_events/api/event', require('./routes/memeventsRoutes'));
// app.use('/moox_events/api/career', require('./routes/careerRoutes'));
// app.use('/moox_events/api/contactus', require('./routes/contactusRoutes'));
// app.use('/moox_events/api/enquiry', require('./routes/enquiryRoutes'));
// app.use('/moox_events/api/team', require('./routes/teamRoutes'));
// app.use('/moox_events/api/achievements', require('./routes/achievementsRoutes'));
// app.use('/moox_events/api/blogs', require('./routes/blogsRoutes'));


app.use('/b2n/api/about-us',require('./routes/aboutusRoutes'));
app.use('/b2n/api/services', express.static('services'));
app.use('/b2n/api/course',require('./routes/courseRoutes'));
app.use('/b2n/api/courses', express.static('courses'));
app.use('/b2n/api/result',require('./routes/resultRoutes'));
app.use('/b2n/api/results', express.static('results'));
app.use('/b2n/api/team',require('./routes/teamRoutes'));
app.use('/b2n/api/teams', express.static('teams'));
app.use('/b2n/api/gallery',require('./routes/galleryRoutes'));
app.use('/b2n/api/gallery', express.static('gallery'));
app.use('/b2n/api/social-media',require('./routes/smRoutes'));
app.use('/b2n/api/social-media', express.static('social-media'));
app.use('/b2n/api/slider',require('./routes/sliderRoutes'));
app.use('/b2n/api/slider', express.static('slider'));
app.use('/b2n/api/contact-us',require('./routes/contactusRoutes'));
app.use('/b2n/api/auth', require('./routes/authRoutes'));
app.use('/b2n/api/footer',require('./routes/footerRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
