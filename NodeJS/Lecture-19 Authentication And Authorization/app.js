// env file
require('dotenv').config();

// express session
const session = require('express-session');

// mongoDB connection with express-session
const MongoDBStore = require('connect-mongodb-session')(session);

// Create MongoDB session store 
const store = new MongoDBStore({
  uri: process.env.MONGODB_URL,
  collection: 'sessions'
})

// Core Module
const path = require('path');

// External Module
const express = require('express');
const mongoose = require('mongoose');

// Local Module
const storeRouter = require('./routes/storeRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
const { pageNotFound } = require('./controllers/errors');
const authRouter = require('./routes/authRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

//express session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: store
}));

//checking session and setting on the base of it
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn || false;
  next();
});

// store routes
app.use(storeRouter);

// protect host routes
app.use('/host', (req, res, next) => {
  if (req.isLoggedIn)
    next();
  else
    res.redirect("/login");
}
);

app.use('/host', hostRouter);

// static files
app.use(express.static(path.join(rootDir, 'public')));

// auth router
app.use(authRouter);

// 404 error
app.use(pageNotFound);

const PORT = 3000;

// Connecting Mongoose (connect to mongodb)
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server up and running.');
    });
  })
  .catch((err) => {
    console.log('Error while connecting to MongoDB:', err);
  });