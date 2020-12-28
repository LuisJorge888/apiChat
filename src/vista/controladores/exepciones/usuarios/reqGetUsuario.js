const validarLoginUsuario  = require("../../../../logica/exepciones/usuarios/validarLoginUsuario");

function validarPeticionGetUsuario() {
    return async (req, res, next) => {

        const validarBodyUser = new validarLoginUsuario();
        const control = await validarBodyUser.validar(req);
        if(!control.valido){
            res.status(400).json({
                ok: true,
                message: "Error al realizar la peticion, verifique los siguientes errores",
                errores: control.errores,
              });
        }else{
            next();
        }  
    };
}

module.exports = validarPeticionGetUsuario;