function mapper(usuario) {
    return {

        nombre:     usuario.nombre,
        apellido:   usuario.apellido,
        email:      usuario.email,
        password:   usuario.password,
        img:        (usuario.img != null) ? '/'+usuario.img : '/default.png'
    }
}

module.exports = (usuario) => mapper(usuario);