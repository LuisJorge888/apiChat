const { Router } = require("express");
const routerHelper = require("../helper");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname+'/../../public/imagenes')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() +'-' + file.originalname)
    }
})
const upload = multer({ storage })
const { 
    getUsersController,
    registerUserController,
    loginUserController,
    profileUsersController
    } = require("../../controladores/ctrUsuario");
const validarPeticionRegistrarUsuario = require("../../controladores/exepciones/usuarios/reqRegistrarUsuario");
const validarPeticionGetUsuario = require("../../controladores/exepciones/usuarios/reqGetUsuario");
const validarPeticionLoginUsuario = require("../../controladores/exepciones/usuarios/reqLoginUsuario");
const validarSesionUsuario = require("../../controladores/exepciones/validarSesion");


const rutas = Router();

rutas.get('/:id', validarSesionUsuario(), validarPeticionGetUsuario(), routerHelper(getUsersController));
rutas.put('/',  upload.single('img'), validarPeticionRegistrarUsuario(), routerHelper(registerUserController));
rutas.post('/login', validarPeticionLoginUsuario(), routerHelper(loginUserController));
rutas.post('/me', validarSesionUsuario(), routerHelper(profileUsersController))

module.exports = rutas;