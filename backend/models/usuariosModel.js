var pool = require('./bd')
var md5 = require('md5')
async function getUserByUsernameAndPassword(usuario, password) {
    try {
        console.log("Usuario:", usuario)
        console.log("Password:", md5(password))
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1'
        var [rows] = await pool.query(query, [usuario, md5(password)])
        return rows[0]
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getUserByUsernameAndPassword}