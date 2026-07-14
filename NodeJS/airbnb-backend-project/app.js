// Core Modules
const path = require("path")

// External Modules
const express = require('express');

//Local Modules
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host", hostRouter);

//Adding 404. sab uper walo ko chance mil gya aor ab is pe aa jae ga
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})