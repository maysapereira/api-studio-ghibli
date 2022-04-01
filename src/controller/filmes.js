import { openDB } from "../configDB.js";

export default async function createTable() {
    openDB().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Filmes ( id INTEGER PRIMARY KEY, nome_original TEXT, nome_em_português TEXT, ano_de_lançamento INTEGER, gênero TEXT, direção TEXT, produção TEXT, roteiro TEXT )')
    })
}

export async function insert(filmes) {
    openDB().then(db => {
        db.run('INSERT INTO Filmes (nome_original, nome_em_português, ano_de_lançamento, gênero, direção, produção, roteiro) VALUES (?,?,?,?,?,?,?)', [filmes.nome_original, filmes.nome_em_português, filmes.ano_de_lançamento, filmes.gênero, filmes.direção, filmes.produção, filmes.roteiro])
    })
}

export async function select() {
    return openDB().then(db => {
        return db.all('SELECT * FROM Filmes')
        .then(res=>res)
    })
}

export async function selectOne(id) {
    return openDB().then(db => {
        return db.get('SELECT * FROM Filmes WHERE id=?', [id])
        .then(res=>res)
    })
}

export async function update(filmes) {
    openDB().then(db => {
        db.run('UPDATE Filmes SET nome_original=?, nome_em_português=?, ano_de_lançamento=?, gênero=?, direção=?, produção=?, roteiro=? WHERE id=?', [filmes.nome_original, filmes.nome_em_português, filmes.ano_de_lançamento, filmes.gênero, filmes.direção, filmes.produção, filmes.roteiro, filmes.id])
    })
}