const express = require('express');

const app = express();
//added middleware
app.use((req, res, next) => {
    console.log("came in first middleware.")
    next();
});

app.use((req, res, next) => {
    console.log("came in second middleware")
    next();
})

app.use((req, res, next) => {
    console.log("came in third middleware")
    // res.send("<p>I am Third Middleware.</p>")
    next();
})


// const PORT = 3000
// app.listen(PORT, () => {
//     console.log(`Server up and running on ${PORT}`)
// })

app.get("/", (req, res, next) => {
    console.log("Handling / for GET")
    res.send("<p>I am Middleware.</p>")
    // next();
})

app.get("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for GET")
    res.send("<p>Please Enter Your Details.</p>")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is up")
})