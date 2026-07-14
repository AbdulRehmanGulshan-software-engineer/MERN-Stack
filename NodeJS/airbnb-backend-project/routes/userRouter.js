//Core Modules
const path = require('path');

// External Modules
const express = require('express');
const userRouter = express.Router();

// Local Modules
const rootDir = require('../utils/pathUtil');

userRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(rootDir, 'views', 'user.html'));
})

module.exports = userRouter;