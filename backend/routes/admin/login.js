var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');
var pool = require('../../models/bd');

router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout:'admin/layout'
  });
});

router.get('/testdb', async function(req, res, next) {
  try {
    const [result] = await pool.query('SELECT 1 + 1 as test');
    res.json({ dbConnection: 'success', result });
  } catch (error) {
    console.error('Error de conexión:', error);
    res.json({ dbConnection: 'error', message: error.message });
  }
});



router.post('/', async (req,res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;
    
    console.log("Datos recibidos:");
    console.log("Usuario:", usuario);
    console.log("Password:", password);

    if (!usuario || !password) {
      console.log('Intento de login con campos vacíos');
      return res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data) {
      req.session.admin_id = data.id_usuario;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch(error) {
    console.log("Error en login:", error);
    res.render('admin/login', {
      layout: 'admin/layout',
      error: true
    });
  }
});

module.exports = router;