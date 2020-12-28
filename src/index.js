const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { PORT } = require('./conf');
const { rutas } = require('./vista/rutas');
const { coneccion } = require('./datos/conexion');

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(rutas); // Lo ultimo que se debe de llamar no mover !!
app.use(express.static(__dirname + '/vista/public'));

app.use((req, res, next) => {
  next();
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
