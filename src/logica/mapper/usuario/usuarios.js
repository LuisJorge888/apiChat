function mapper(usuario) {
    return {
        
        id:         usuario.id,
        nombre:     usuario.nombre,
        apellido:   usuario.apellido,
        email:      usuario.email,
        password:   usuario.password,
        img:        usuario.img,
        ban:        usuario.ban,
        code:       usuario.code,
        ult_conec:  usuario.ult_conec,
        creado_at:  usuario.creado_at,
        modifi_at:  usuario.modifi_at,
        delete_at:  usuario.delete_at 
    }
}

module.exports = (usuario) => mapper(usuario);