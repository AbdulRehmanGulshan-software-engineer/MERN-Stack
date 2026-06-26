const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")
const PROTO_PATH = "./problems.proto"
const express = require("express")

const app = express()
app.use(express.json())

// part of boiler plate
const options = {
    KeepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options)
const ProblemService = grpc.loadPackageDefinition(packageDefinition).ProblemService

const client = new ProblemService("localhost:50051", grpc.credentials.createInsecure())

//endpoints(first service)
app.get('/getAllProblems', (req, res) => {
    client.getAllProblems({}, (error, problems) => {
        if (error)
            throw error
        res.json(problems)
    })
})

//endpoints(second service)
app.post('/updateProblem/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    client.updateProblem({ id, ...body }, (error, problem) => {
        if (error)
            throw error
        res.json(problem)
    })
})


app.listen('3000', () => {
    console.log("Client Is Running")
})

