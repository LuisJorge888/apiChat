const { Router } = require("express");
const routerHelper = require("../helper");
const { 
    registerSolicitudController,
    misSolicitudesController
    } = require("../../controladores/ctrSolicitud");
const validarSesionUsuario = require("../../controladores/exepciones/validarSesion");
const validarPeticionRegistrar = require("../../controladores/exepciones/solicutudes/reqRegistrarSolicitud");

const rutas = Router();

rutas.put('/', validarSesionUsuario(), validarPeticionRegistrar(), routerHelper(registerSolicitudController));
rutas.get('/', validarSesionUsuario(), routerHelper(misSolicitudesController))

module.exports = rutas;