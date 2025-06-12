const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const youtubeRoute = require('./routes/YoutubeRoute.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// Gắn route
app.use('/api/youtube', youtubeRoute);
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});