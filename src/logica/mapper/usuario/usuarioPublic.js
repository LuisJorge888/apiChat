const { DOMAIN_IMG } = require("../../../conf");

function mapper(usuario) {
  
    return {

        id:         usuario.id,
        nombre:     usuario.nombre,
        apellido:   usuario.apellido,
        email:      usuario.email,
        img:        DOMAIN_IMG+usuario.img,
    }
}

module.exports = (usuario) => mapper(usuario);