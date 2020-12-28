const getUsuario = require("../../../datos/repositorio/usuario/getUsuario");
const getTokenInfo = require("../../util/webtoken/getTokenInfo");
const mapperPublic = require("../../mapper/usuario/usuarioPublic");

async function profileUsuarioServicio(token){
    
    const usuarioLogin = getTokenInfo(token); // web token
    const usuario = await getUsuario(usuarioLogin.usuario.id);
    if(usuario){ 
        return mapperPublic(usuario);
    }
    return null;
};

module.exports = profileUsuarioServicio;