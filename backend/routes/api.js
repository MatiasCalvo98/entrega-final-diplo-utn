var express = require('express')
var router = express.Router()
var novedadesModel = require('../models/novedadesModel')
var cloudinary = require('cloudinary').v2
var nodemailer = require('nodemailer')


router.get('/novedades', async function (req,res,next) {
    let novedades = await novedadesModel.getNovedades()

    novedades = novedades.map(novedades => {
        if(novedades.id_img){
            const imagen = cloudinary.url(novedades.id_img, {
                width:1200,
                height:800,
                crop: 'fill'
            })
            return {
                ...novedades,
                imagen
            } 
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    })

    res.json(novedades)

})

router.post('/contacto', async(req,res) => {
    
    const mail = {
        to: 'redroxgaming@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contactó a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje}</br> 
        Su número de contacto es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    })

})


module.exports= router