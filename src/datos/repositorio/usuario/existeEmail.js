const { coneccion } = require("../../conexion");

let existeEmail = async function(email){

    let sql = 'SELECT id FROM usuarios WHERE email = ?';

    const p = new Promise((resolve, reject) => {

        coneccion.query(sql, [email], function (err, result) {
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
  
  module.exports = existeEmail;