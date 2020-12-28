const { coneccion } = require("../../conexion");

let getEmailUsuario = async function(email){

    let sql = 'SELECT * FROM usuarios WHERE email = ?';
    const p = new Promise((resolve, reject) => {

        coneccion.query(sql, [email], function (err, result) {
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
  
  module.exports = getEmailUsuario;