// External Modules
const express = require('express');

// Local Modules
const userRequestHandler = require('./user')

const app = express();
//adding middleware
app.use("/", (req, res, next) => {
    console.log("came in first Middleware", req.url, req.method);
    // res.send("<p>Came from first middleware<p>")        //means end me, no call to the next middleware will go after this
    next();     // will say i have completed my work , ok go to next middleware
});

app.use("/submit-details", (req, res, next) => {
    console.log("came in second Middleware", req.url, req.method);
    res.send('<p>came from second middleware</p>')
});

// app.use("/", (req, res, next) => {
//     console.log("came in another Middleware", req.url, req.method);
// });


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server up and running on ${PORT}`)
})