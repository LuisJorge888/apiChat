const { Router } = require("express");
const routerHelper = require("../helper");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/../../public/imagenes')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
const upload = multer({ storage })
const { 
    test
    } = require("../../controladores/ctrUsuario");

const rutas = Router();

rutas.put('/', upload.single('img'),routerHelper(test));

module.exports = rutas;