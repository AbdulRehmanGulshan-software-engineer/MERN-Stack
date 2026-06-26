const root = document.getElementById('root')


const fetchData = () => {
    fetch('http://localhost:3000/api/problems')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            root.textContent = JSON.stringify(data)
        })
};

setInterval(() => { fetchData()
    root.textContent = ''
 }, 2000)

