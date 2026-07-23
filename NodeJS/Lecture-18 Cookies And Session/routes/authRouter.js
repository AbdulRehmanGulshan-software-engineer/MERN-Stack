// Core Modules
const path = require('path');

// External Module
const express = require('express');
const authRouter = express.Router();

// Local Module
const { getLogin, postLogin, postLogout } = require('../controllers/authController');

authRouter.get("/login", getLogin);
authRouter.post("/login", postLogin);
authRouter.post('/logout',postLogout);

module.exports = authRouter;