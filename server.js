const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, (err, db) => {
  if (err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');
  }
});

console.log(process.env.SECRET);

app.listen(port, () => {
  console.log('server running on port: ' + port);
});
