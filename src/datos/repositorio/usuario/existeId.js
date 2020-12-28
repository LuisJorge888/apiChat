const { coneccion } = require("../../conexion");

let existeId = async function(id){

    console.log("id: -> "+id)
    let sql = 'SELECT id FROM usuarios WHERE id = ?';

    const p = new Promise((resolve, reject) => {

        coneccion.query(sql, [id], function (err, result) {
            if (err) {
                console.log(err);
                reject("Algo salio mal");
            }
            if(result.length > 0) resolve(true);
            else resolve(false);
        });
    })

    return x = p.then(res => {
        return res;
    })
    .catch(error => {
        console.log("error: "+error)
    })
  }
  
  module.exports = existeId;