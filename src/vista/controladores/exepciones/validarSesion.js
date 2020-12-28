const validarToken = require('../../../logica/util/webtoken/verificar');

function validarSesionUsuario() {
    return async (req, res, next) => {

        const autorizacion = req.headers['authorization'];
        if(typeof autorizacion === 'undefined'){
            res.status(403).json({
                ok: true,
                message: "Error debe iniciar session para llevaar acabo esta operacion.",
                error: "No podee el header 'authorization'."
            });
        }else{
            if(validarToken(autorizacion)){
                req.token = autorizacion;
                next();
            }
            else {
                res.status(403).json({
                    ok: true,
                    message: "Error debe iniciar session para llevaar acabo esta operacion.",
                    error: "Token no valido."
                });
            }
        }  
    };
}

module.exports = validarSesionUsuario;