const registrarSolicitud = require("../../../datos/repositorio/solicitud/registrarSoliditud");
const getTokenInfo = require("../../util/webtoken/getTokenInfo");

async function registrarSolicitudServicio({token, peticion}){
    
    const usuarioLogin = getTokenInfo(token); // web token
    const receptor = peticion.receptor;
    const solicitud = await registrarSolicitud({id_emisor: usuarioLogin.usuario.id, id_receptor: receptor});
    if(solicitud){ 
        return solicitud;
    }
    return null;
};

module.exports = registrarSolicitudServicio;