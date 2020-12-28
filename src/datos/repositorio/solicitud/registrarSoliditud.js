const { coneccion } = require("../../conexion");

async function registrarSolicitud({id_emisor, id_receptor}){

    registro = {
        id_emisor,
        id_receptor,
        aceptada: false,
        creado_at: new Date(),
        delete_at: null
    }
    let sql = 'INSERT INTO solicitudes SET ?';
    const p = new Promise((resolve, reject) => {

        coneccion.query(sql, registro , function (err, result) {
            if (err) {
                console.log(err);
                reject("Algo salio mal");
            }
            if(result.affectedRows > 0) resolve(result);
            else resolve(null);
        });
    })

    return x = p.then(res => {
        console.log("Soliciitud registrada Id:", res.insertId);
        return {
            id: res.insertId,
            ...registro
        };
    })
    .catch(error => {
        console.log("error: "+error)
    })
}

module.exports = registrarSolicitud;