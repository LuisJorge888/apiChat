const validarCrearSolicitud  = require("../../../../logica/exepciones/solicutudes/validarCrearSolicitud");

function validarPeticionRegistrarPeticion() {
    return async (req, res, next) => {
 
        const peticion = req.body;
        const validarBodyUser = new validarCrearSolicitud();
        const control = await validarBodyUser.validar(peticion);
        if(!control.valido){
            res.status(400).json({
                ok: true,
                message: "Error al realizar la peticion, verifique los siguientes errores",
                errores: control.errores,
              });
        }else{
            console.log("Paso: receptor: "+req.body.receptor)
            next();
        }  
    };
}

module.exports = validarPeticionRegistrarPeticion;