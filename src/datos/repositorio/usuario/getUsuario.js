const { coneccion } = require("../../conexion");

let getUsuario = async function(id){

    let sql = 'SELECT * FROM usuarios WHERE id = ?';
    const p = new Promise((resolve, reject) => {

        coneccion.query(sql, [id], function (err, result) {
            if (err) {
                console.log(err);
                reject("Algo salio mal");
            }
            if(result.length > 0) resolve(result[0]);
            else resolve(null);
        });
    })

    return x = p.then(res => {
        console.log("usuarios consultado: ", res.email);
        return res;
    })
    .catch(error => {
        console.log("error: "+error)
    })
  }
  
  module.exports = getUsuario;