const getUsuario = require("../../../datos/repositorio/usuario/getUsuario");
const mapperUsuarioPublic = require("../usuario/usuarioPublic");

async function mapper(solicitud) {
    
    const usuarioReceptor = await getUsuario(solicitud.id_emisor);
    const usuario = mapperUsuarioPublic(usuarioReceptor);
    return {

        id: solicitud.id,
        aceptada: solicitud.aceptada,
        receptor:   {
            ...usuario
        }

    }
}

module.exports = (solicitud) => mapper(solicitud);