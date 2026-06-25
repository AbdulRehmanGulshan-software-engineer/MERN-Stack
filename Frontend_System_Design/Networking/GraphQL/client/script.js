fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        query: "{ problems { id solvers { id name } } }"
    }),
});