import express from 'express'

const app = express()
app.use(express.json())
const PORT = 3000

let problems = [
    {
        id: 1,
        title: "Two Sum",
        description: "Find two numbers in an array that add up to a target value."
    },
    {
        id: 2,
        title: "Reverse String",
        description: "Reverse a given string without using built-in reverse methods."
    },
    {
        id: 3,
        title: "Valid Parentheses",
        description: "Determine whether a string of brackets is balanced."
    }
];

//creating endpoint
app.get('/api/problems', (req, res) => {
    res.json(problems);
})

app.post('/api/problems', (req, res) => {
    const body = req.body
    problems = [
        ...problems,
        body
    ]
    res.json(problems)
})

app.put('/api/problems/:id', (req, res) => {
    const body = req.body
    const id = req.params.id
    problems = problems.map((problem) => {
        if (problem.id == id) {
            return {
                id, ...body
            }
        }
        return problem
    })
    res.json(problems)
})

app.delete('/api/problems/:id', (req, res) => {
    const id = req.params.id
    problems = problems.filter((problem) => problem.id != id)
    res.json(problems)
})

app.patch('/api/problems/:id', (req, res) => {
    const body = req.body
    const id = req.params.id
    const problem = problems.find((p) => p.id == id)
    problems = problems.map((p) => {
        if (p.id == id) {
            return {
                ...problem, ...body
            }
        }
        return p
    })
    res.json(problems)
})

app.listen(PORT, () => {
    console.log(`server up and running on ${PORT}`)
})