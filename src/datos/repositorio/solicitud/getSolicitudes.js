const { coneccion } = require("../../conexion");

async function getSolicitudes(id_receptor){

    let sql = 'SELECT * FROM solicitudes WHERE id_receptor = ? AND aceptada = 0';
    const p = new Promise((resolve, reject) => {

        coneccion.query(sql, [id_receptor], function (err, result) {
            if (err) {
                console.log(err);
                reject("Algo salio mal");
            }
            resolve(result);
        });
    })

    return x = p.then(res => {
        console.log("consulto solicitudes: ", res);
        if(res.length > 0) {
            return res;
        }
        return null;
    })
    .catch(error => {
        console.log("error: "+error)
    })
  }
  
  module.exports = getSolicitudes;