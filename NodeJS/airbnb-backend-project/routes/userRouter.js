//Core Modules
const path = require('path');

// External Modules
const express = require('express');
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(__dirname, '../', 'views', 'user.html'));
})

module.exports = userRouter;