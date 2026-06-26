const root = document.getElementById('root')

const makeRequest = async () => {
    try {
        root.textContent = "Waiting for new message...";

        const res = await fetch('http://localhost:3000/messages')
        const data = await res.json()

        console.log(data)
        root.textContent = JSON.stringify(data);
        makeRequest() //start waiting again
    } catch (error) {
        root.textContent = `Error : ${error}`
    }
}
makeRequest()