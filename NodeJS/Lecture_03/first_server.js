const { prototype } = require('events');
const http = require('http');

function requestListener(req, res) {
    console.log(req);
}

const server = http.createServer(requestListener);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server up and running at ${PORT}`)
});