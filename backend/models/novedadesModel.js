var pool = require('./bd')

async function getNovedades() {
    var query = "select * from posts"
    var [rows] = await pool.query(query)
    return rows
}

async function insertNovedad(obj) {
    try {
        var query = "insert into posts set ?"
        var rows = await pool.query(query, [obj])
        return rows
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function deleteNovedadById(id) {
    var query = 'DELETE FROM posts WHERE `id-post` = ?'
    var rows = await pool.query(query, [id])
    return rows
}

async function getNovedadById(id) {
    var query = 'select * from posts where `id-post`= ?'
    var [rows] = await pool.query(query, [id])
    return rows[0]
}

async function updateNovedadById(obj,id) {
    try {
        var query = 'update posts set ? where `id-post`=?'
        var rows = await pool.query(query, [obj, id])
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = {getNovedades, insertNovedad, deleteNovedadById, getNovedadById, updateNovedadById}