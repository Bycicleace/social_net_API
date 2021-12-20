const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

let siteName;

if (PORT === 3001) {
    siteName = "http://localhost";
} else {
    siteName = ""; // Update to live site later
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/index.js'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhose:27017/social-network');

mongoose.set('debug', true);

app.listen(
    PORT,
    () => console.log(`Listening on ${siteName}:${PORT}`)
);