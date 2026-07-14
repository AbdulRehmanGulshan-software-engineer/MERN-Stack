// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const hostRouter = express.Router();

// Local Modules
const rootDir = require('../utils/pathUtil')

hostRouter.get("/add-home", (req, res, next) => {
    console.log(req.url, req.method);
    // res.sendFile(path.join(rootDir, "views", "add-home.html"));
    res.render('add-home', { pageTitle: 'Add Home' });
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home Registration successful for:", req.body);
    registeredHomes.push({ houseName: req.body.houseName });
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;