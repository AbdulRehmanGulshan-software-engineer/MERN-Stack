const grpc = require("@grpc/grpc-js")
const PROTO_PATH = "./problems.proto"
const protoLoader = require("@grpc/proto-loader")


// part of boiler plate
const options = {
    KeepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options)
//extracted protos(also part of boiler plat)
const problemsProto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server()
let problems = [
    {
        id: "0",
        title: "Polyfill of Array.map",
        description: "Some description",
    },
    {
        id: "1",
        title: "Polyfill of Promise.all()",
        description: "Some description",
    },
];

server.addService(problemsProto.ProblemService.service, {
    GetAllProblems: (_, callback) => {
        callback(null, { problems: problems })
    },
    UpdateProblem: (call, callback) => {
        const id = call.request.id
        console.log(call.request)
        problems = problems.map((p) => {
            if (id === p.id) {
                return { ...p, ...call.request }
            }
            return p
        })
        const updatedProblem = problems.find((p) => p.id === id)
        callback(null,{...updatedProblem})
    }
})

server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(),
    (error, port) => {
        console.log("grpc is up and running")
        server.start();
    }

)