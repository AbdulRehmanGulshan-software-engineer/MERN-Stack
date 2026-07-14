// in this main topic is Parsing Request

// External Modules
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

// Making middleware
app.get("/contact-us", (req, res, next) => {
    console.log('sending form on browser get request');
    res.send(`<form action="/contact-us" method="POST">
            <input type="text" name="username" placeholder="Enter Your Name">
            <button type="submit">Submit</button>
        </form>`)
})

//body-parser middleware
app.use(bodyParser.urlencoded(), (req, res, next) => {
    console.log('body parser request executed')
    next()
});

//Today's modern method
// app.use(express.urlencoded({ extended: "true" }))

//post middleware
app.post("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for POST", req.url, req.method, req.body);
    res.send(`<h1>Thanks For Submitting Your Form.      </h1>`)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
})