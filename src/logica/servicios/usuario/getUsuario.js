const getUsuario = require("../../../datos/repositorio/usuario/getUsuario");
const mapperPublic = require("../../mapper/usuario/usuarioPublic");

async function getUsuarioServicio(id){
    
    const usuario = await getUsuario(id);
    if(usuario){ 
        return mapperPublic(usuario);
    }
    return null;
};

module.exports = getUsuarioServicio;