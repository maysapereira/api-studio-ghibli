import { openDB } from "../configDB.js";

export default async function createTable() {
    openDB().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Filmes ( id INTEGER PRIMARY KEY, nome_original TEXT, nome_em_português TEXT, ano_de_lançamento INTEGER, gênero TEXT, direção TEXT, produção TEXT, roteiro TEXT )')
    })
}
