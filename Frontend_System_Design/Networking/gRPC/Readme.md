Run gRPC server with   (node .\server.js)
Run express JS server with   (node client.js)
Then use postman and GET request localhost:3000/getAllProblems
For Post Request localhost:3000/updateProblem/0 along with body

what happening in this GRPC: we have a node express server , we from our frontend(react,angular,html,postman,whatever) will call this express server on localhost300/ then this server will call gRPC server for microservice on 127.0.0.1:50051 and then return the result on our frontend.

Benefit Of gRPC: n number of services in n number of languages without any restriction and we can interchangeably transfer data with each service. This gRPC is very much powerful