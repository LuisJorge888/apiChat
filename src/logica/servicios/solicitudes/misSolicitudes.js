const getTokenInfo = require("../../util/webtoken/getTokenInfo");
const getSolicitudes = require("../../../datos/repositorio/solicitud/getSolicitudes");
const mapperSolicitudPublic = require("../../mapper/solicitud/solicitudPublic");

async function misSolicitudesServicio({token, peticion }){

    const usuarioLogin = getTokenInfo(token); // web token
    const solicitudes = await getSolicitudes(usuarioLogin.usuario.id);
    if(solicitudes){

        const respuesta = await solicitudes.map(async (soli) => {
            const solicitud = await mapperSolicitudPublic(soli);   
            return solicitud;
        })
        return Promise.all(respuesta);
    }
    return null;
}

module.exports = misSolicitudesServicio;