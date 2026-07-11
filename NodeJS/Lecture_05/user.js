const fs = require('fs')

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);

    //checking url, sending response on its basis
    if (req.url === '/') {
        // response
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>User Details</title></head>')
        res.write('<body><h1>Enter Your Details:</h1>')
        // creating form
        res.write('<form action="/submit-details" method="POST">')
        res.write('<input type ="text" name="username" placeholder="Enter your name: ">')
        res.write('<label for="Gender">Gender</label>')
        res.write('<input type="radio" id="male" name="gender" value="male" >')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="female" name="gender" value="female" >')
        res.write('<label for="female">Female</label>')
        res.write('<button type="submit" >Submit</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    else if (req.url === '/products') {
        // response
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My First Response</title></head>')
        res.write('<body><h1>You are at localhost:3000/products</h1></body>')
        res.write('</html>')
        return res.end();
    }
    //Redirecting Request
    else if (req.url === "/submit-details" && req.method === "POST") {

        const body = [];
        //reading form data (reading chunks)
        req.on("data", chunk => {
            console.log(chunk);
            body.push(chunk);
        })
        //buffering chunks
        req.on("end", () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody)
            // parsing request
            const params = new URLSearchParams(fullBody);
            // const jsonObject = {}
            // for (const [key, value] of params.entries()) {
            //     jsonObject[key] = value;
            // }

            //easy way of parsing
            const jsonObject = Object.fromEntries(params)
            console.log(jsonObject)

            //writing in file
            const jsonString = JSON.stringify(jsonObject)
            console.log(jsonString)
            fs.writeFileSync("user.txt", jsonString)
        })


        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
    }
    else {
        //response
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My First Response</title></head>')
        res.write('<body><h1>You are at localhost:3000/random</h1></body>')
        res.write('</html>')
        res.end();
    }


};

module.exports = userRequestHandler;

// //using Modules other ways 👇
// //multiple exports using object
// module.exports = {
//     handler: userRequestHandler,
//     extra: "Extra"
// }

// ///setting multiple properties
// module.exports.handler = userRequestHandler;
// module.exports.extra = "Extra";

// //Shortcut
// exports.handler = userRequestHandler;
// exports.extra = "Extra"