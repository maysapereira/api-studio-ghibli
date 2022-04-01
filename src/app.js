import express from "express";
import { openDB } from "./configDB.js";
import createTable, { insert, select, selectOne, update, deleta } from "./controller/filmes.js";

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
})

app.use(express.json())

//CREATE
app.post('/filmes', function(req, res){
    insert(req.body)
    res.json({
        "statusCode":200,
        "msg": "Filme adicionado com sucesso"
    })
})

//READ
app.get('/filmes', async function(req, res){
    let filmes = await select()
    res.json(filmes)
})

app.get('/filme', async function(req, res){
    let filmes = await selectOne(req.body.id)
    res.json(filmes)
})

//UPDATE
app.put('/filmes', function(req, res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode": 400,
            "msg": "Você precisa informar um id"
        })
    } else {
        update(req.body)
        res.json({
            "statusCode": 200,
            "msg": "Filme atualizado com sucesso"
        })
    }
})

//DELETE
app.delete('/filme', async function(req, res){
    let filmes = await deleta(req.body.id)
    res.json(filmes)
})

openDB()
createTable()