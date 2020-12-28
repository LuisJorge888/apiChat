const { coneccion } = require("../../conexion");

async function existeSolicitudesPendiente(id_receptor, id_emisor){

    let sql = 'SELECT * FROM solicitudes WHERE id_receptor = ? AND id_enisor = ? AND aceptada = 0';
    const p = new Promise((resolve, reject) => {

        coneccion.query(sql, [id_receptor,id_emisor], function (err, result) {
            if (err) {
                console.log(err);
                reject("Algo salio mal");
            }
            resolve(result);
        });
    })

    return x = p.then(res => {
        if(res.length > 0) {
            console.log("consulto solicitudes: exite", res);
            return true;
        }
        console.log("consulto solicitudes: no existe", res);
        return false;
    })
    .catch(error => {
        console.log("error: "+error)
    })
  }
  
  module.exports = existeSolicitudesPendiente;