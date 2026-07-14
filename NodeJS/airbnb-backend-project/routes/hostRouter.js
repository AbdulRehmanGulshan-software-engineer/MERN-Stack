// External Modules
const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    console.log(req.url, req.method);
    res.send(
        `
        <h1>Register Your Home here: </h1>
        <form action="/host/add-home" method="POST">
        <input type="text" name="houseName" placeholder="Enter Home Name:">
        <input type="submit" >
        </form>
        `
    )
})

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body);
    res.send(
        `
        <h1>Home Registered successfully: </h1>
        <a href="/">Go To Home</a>
        `
    )
})

module.exports = hostRouter;