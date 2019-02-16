const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const passport   = require('passport');

require('dotenv').config();

const users = require('./routes/api/users');

const app = express();


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

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

//routes
app.use('/api/users', users);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('server running on port: ' + port);
});
