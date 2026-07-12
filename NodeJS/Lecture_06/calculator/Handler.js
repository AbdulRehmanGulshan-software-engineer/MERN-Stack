const { sumRequestHandler } = require("./Sum")

const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>Practice Set</title></head >
                <body>
                    <h1>Here is the Calculator</h1>
                    <form action="/calculator-result" method="POST">
                    <input type="text" placeholder="First Number" name="first"/>
                    <input type="text" placeholder="Second Number" name="second"/>
                    <input type="submit" value ="Sum"> 
                    </form>
                </body>
            </html
            `);
        return res.end();
    } else if (req.url.toLowerCase() === "/calculator") {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>Practice Set</title></head >
                <body>
                    <h1>404 Page Not Found!</h1>
                    <a href = "/">Go To Home</a>
                </body>
            </html
            `);
        return res.end();
    } else if (req.url.toLowerCase() === "/calculator-result" &&
        req.method === "POST") {
        return sumRequestHandler(req, res)
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>Practice Set</title></head >
                <body>
                    <h1>404 Page Not Found!</h1>
                    <a href = "/">Go To Home</a>
                </body>
            </html
            `);
        res.end();
    }
}

exports.requestHandler = requestHandler;