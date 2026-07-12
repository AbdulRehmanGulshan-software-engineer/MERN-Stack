const sumRequestHandler = (req, res) => {
    console.log("1. In Some Request Handler", req.url);

    // getting chunks
    const body = [];
    let result;
    req.on("data", chunk => {
        body.push(chunk);
        console.log("2. Chunk Came")
    });
    req.on("end", () => {
        console.log("3. End event came")
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
    });
    
    //sending result in response (will see in next lecture)
    console.log("4. Sending the response")
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>Practice Set</title></head>
            <body>
                <h1>Your Sum is ${result}</h1>
            </body>
        </html>
        `);
    return res.end();
}

exports.sumRequestHandler = sumRequestHandler;