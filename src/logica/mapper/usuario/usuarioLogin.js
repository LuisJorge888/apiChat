function mapper(usuario) {
    return {

        email:     usuario.email,
        password:   usuario.password,
    }
}

module.exports = (usuario) => mapper(usuario);