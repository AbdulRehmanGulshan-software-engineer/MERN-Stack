import express from "express";
import cors from "cors"
import events from 'events'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//initiated event
const messageEventEmitter = new events.EventEmitter()

//created request
app.get('/messages', (req, res) => {
    messageEventEmitter.once("newMessage", (from, message) => {
        res.json({ from, message })
    })
})

app.post('/new-message', (req, res) => {
    const { from, message } = req.body
    messageEventEmitter.emit('newMessage', from, message)
    res.json({ message: "success" })
})

app.listen(3000, () => {
    console.log("Long Polling server started")
})