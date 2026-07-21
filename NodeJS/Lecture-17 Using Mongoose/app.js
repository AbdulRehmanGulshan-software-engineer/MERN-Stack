// env file
require('dotenv').config();

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

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.use(storeRouter);
app.use('/host', hostRouter);

app.use(express.static(path.join(rootDir, 'public')));

app.use(pageNotFound);

const PORT = 3000;

// Connecting Mongoose
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