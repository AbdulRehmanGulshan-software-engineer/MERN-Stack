// External Modules
const express = require('express');

//Local Modules
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(hostRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})