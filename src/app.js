import express from "express";
import { openDB } from "./configDB.js";
import createTable from "./controller/filmes.js";

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
})

openDB()
createTable()