const validarLoginUsuario  = require("../../../../logica/exepciones/usuarios/validarLoginUsuario");

function validarPeticionLoginUsuario() {
    return async (req, res, next) => {

        const peticion = {
            ...req.body,
            mensaje: 'algo'
        }
        console.log("peticion: ",peticion)
        const validarBodyUser = new validarLoginUsuario();
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

module.exports = validarPeticionLoginUsuario;