import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: "localhost", // on rentre l'hôte, l'adresse url où se trouve la BDD
    database: "chess_bar", // le nom de la BDD
    user: "root", // l'identifiant de la BDD
    password: "root", // le mot de passe
})

export default db;