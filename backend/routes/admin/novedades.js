var express = require('express')
var router = express.Router()
var novedadesModel = require('../../models/novedadesModel')
var util = require('util')
var cloudinary = require('cloudinary').v2
const uploader = util.promisify(cloudinary.uploader.upload)
const destroy = util.promisify(cloudinary.uploader.destroy)

router.get('/', async function (req,res,next) {
    var novedades = await novedadesModel.getNovedades()
    //console.log("Novedades obtenidas:", novedades); 

    novedades = novedades.map(novedad => {
        if(novedad.id_img) {
            const imagen = cloudinary.image(novedad.id_img, {
                width:1200,
                width: 800,
                crop: 'fill'
            })
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    })

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    })
})

router.get('/agregar', (req,res,next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
})

router.post('/agregar',async (req,res,next)=> {
    try {

        var id_img = ''
        if (req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen
            id_img = (await uploader(imagen.tempFilePath)).public_id
        }

        if (
            req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""
        ) {
            await novedadesModel.insertNovedad({
                ...req.body,
                id_img
            })
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout:'admin/layout',
                error: true, 
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout:'admin/layout',
            error:true, 
            message: 'No se cargo la novedad'
        })
    }
})

router.get('/eliminar/:id', async (req,res,next) => {
    var id = req.params.id

    let novedad = await novedadesModel.getNovedadById(id)
    if(novedad.id_img) {
        await (destroy(novedad.id_img))
    }

    await novedadesModel.deleteNovedadById(id)
    res.redirect('/admin/novedades')
})

router.get('/editar/:id', async(req,res, next) => {
    var id = req.params.id
    var novedad = await novedadesModel.getNovedadById(id)

    res.render('admin/editar', {
        layout: 'admin/layout',
        novedad
    })
})

router.post('/editar', async(req, res, next) => {
        try {

            let id_img = req.body.img_original
            let borrar_img_vieja = false 

            if(req.body.img_delete === "1") {
                id_img = null
                borrar_img_vieja = true
            } else {
                if(req.files && Object.keys(req.files).length > 0) {
                    imagen = req.files.imagen
                    id_img = (await uploader(imagen.tempFilePath)).public_id
                    borrar_img_vieja = true
                }
            }
            if(borrar_img_vieja && req.body.img_original) {
                await (destroy(req.body.img_original))
            }

            var obj = {
                titulo: req.body.titulo,
                subtitulo: req.body.subtitulo,
                cuerpo: req.body.cuerpo,
                id_img
            }

            console.log("📝 Datos a actualizar:", obj);
            console.log("🔑 ID de la novedad:", req.body.id);

            await novedadesModel.updateNovedadById(obj,req.body.id)
            res.redirect('/admin/novedades')
        }catch(error) {
            console.log(error)
            res.render('admin/editar', {
                layout: 'admin/layout',
                error: true,
                message: 'No se editó correctamente'
            })
        }

    })

module.exports = router