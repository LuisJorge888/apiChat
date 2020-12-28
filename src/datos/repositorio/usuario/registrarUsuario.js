const { coneccion } = require("../../conexion");

async function registrarUsuario(usuario){

  const registro  = { 
    ...usuario, 
    code: '',
    ult_conec: null,
    creado_at: new Date(),
    modifi_at: null,
    delete_at: null
  };

  let sql = 'INSERT INTO usuarios SET ?';
  const p = new Promise((resolve, reject) => {
    coneccion.query(sql, registro, function (err, result) {
      console.log(result)
      if (err) {
          console.log(err);
          reject("Algo salio mal");
      }
      if(result.affectedRows > 0) resolve(result);
      else resolve(null);
    });
  })

  return x = p.then(res => {
      console.log("usuarios registrado: Id:", res.insertId +" email: "+registro.email);
      return {
        id: res.insertId,
        ...registro
      };
  })
  .catch(error => {
      console.log("error: "+error)
  })
}

module.exports = registrarUsuario;