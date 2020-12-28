const  getEmailUsuario = require("../../../datos/repositorio/usuario/getEmailUsuario");
const mapperLogin = require("../../mapper/usuario/usuarioLogin");
const mapperPublic = require("../../mapper/usuario/usuarioPublic");
const comparePassword = require("../../util/password/comparePassword");
const crearToken = require('../../util/webtoken/crearToken'); 

async function loginUsuarioServicio(usuarioDTO){
    
    const entidadUsuario = mapperLogin(usuarioDTO);
    const usuario = await getEmailUsuario(entidadUsuario.email);
    const exito = await comparePassword(entidadUsuario.password,usuario.password);
    if(exito){
        const usuarioLogin = mapperPublic(usuario);
        const token = crearToken(usuarioLogin);
        return {usuario: usuarioLogin, token};
    }
    return null;
};

module.exports = loginUsuarioServicio;