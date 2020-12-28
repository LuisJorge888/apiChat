const validarCrearUsuario  = require("../../../../logica/exepciones/usuarios/validarCrearUsuario");

function validarPeticionRegistrarUsuario() {
    return async (req, res, next) => {
        
        const peticion = {
            ...req.body,
            img: (req.file != undefined) ? req.file.filename : null
        }
        const validarBodyUser = new validarCrearUsuario();
        const control = await validarBodyUser.validar(peticion);
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

module.exports = validarPeticionRegistrarUsuario;