import express from "express";
import { openDB } from "./configDB.js";

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
})

openDB()