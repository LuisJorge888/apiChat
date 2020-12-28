const { Router } = require("express");

const users = require("./api/users");
const solicitudes = require("./api/solicitudes");
const test = require("../rutas/api/test");

const rutas = Router();

rutas.use("/usuarios", users);
rutas.use("/solicitudes", solicitudes);
rutas.use("/test", test);

module.exports = {
    rutas,
    Router
};