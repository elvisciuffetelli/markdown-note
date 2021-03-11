// Import dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const path = require('path');
const bodyParser = require("body-parser");
const passport = require("passport");
const connectDB = require("./config/db");
const users = require("./routes/api/users");

// Create a new express application named 'app'
const app = express();

// Bodyparser middleware
app.use(
    express.urlencoded({
      extended: false
    })
  );
  app.use(express.json());

// Configure the bodyParser
app.use(express.json());
//app.use(express.urlencoded());

// Configure the CORs middleware
app.use(cors());
// Require Route

// Catch any bad requests
/* app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
}); */

//load dotenv config.
dotenv.config();
//connect to the db
connectDB();

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// Serve static assets if in production
// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;
// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));