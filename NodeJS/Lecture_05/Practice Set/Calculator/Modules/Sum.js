const sumRequestHandler = (req, res) => {
    console.log("In Some Request Handler", req.url);

    // getting chunks
    const body = [];
    req.on("data", chunk => body.push(chunk))
    req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
    });
    //sending result in response (will see in next lecture)
}

exports.sumRequestHandler = sumRequestHandler;