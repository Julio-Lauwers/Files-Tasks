const express = require('express')
const app = express()
const port = 8000


app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//Routes

const routes = require("./routes/router")

app.use(routes)

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`)
})
