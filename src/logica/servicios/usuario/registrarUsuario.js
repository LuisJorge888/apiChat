const registrarUsuario = require("../../../datos/repositorio/usuario/registrarUsuario");
const mapper = require("../../mapper/usuario/usuarioRegistro");
const mapperPublic = require("../../mapper/usuario/usuarioPublic");
const encriptarPassword = require("../../util/password/hashPassword");

async function registrarUsuarioServicio(usuarioDTO){
     
    const entidadUsuario = mapper(usuarioDTO);
    entidadUsuario.password = await encriptarPassword(entidadUsuario.password);
    const usuario = await registrarUsuario(entidadUsuario);
    if(usuario){ 
        console.log("id: ",usuario)
        return mapperPublic(usuario);
    }
    return null;
};

module.exports = registrarUsuarioServicio;