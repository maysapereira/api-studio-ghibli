import express from "express";
import { openDB } from "./configDB.js";
import createTable, { insert } from "./controller/filmes.js";

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
})

app.use(express.json())

app.post('/filmes', function(req, res){
    insert(req.body)
    res.json({
        "statusCode":200
    })
})

openDB()
createTable()