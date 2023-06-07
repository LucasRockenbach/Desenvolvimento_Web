const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Luquinha10",
    port:3306,
    database:"movies"
})

module.exports = conexao



/*let mysql = require('mysql')

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '@Luquinha10',
        database: 'movies'
    })
}*/