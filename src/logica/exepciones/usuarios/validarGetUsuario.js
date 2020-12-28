const existeIdUsuario = require("../../../datos/repositorio/usuario/existeId");

class validarIdUsuario {

    constructor(){
        this.message = "Error al consultar, verifique los siguientes errores.";
        this.errores = [];
    }

    async validarId(id){

        const existe = await existeIdUsuario(id);
        if(!existe) this.errores.push(`El id del usuario no existe.`);  
    }

    async validar(id){

        await this.validarId(id);

        if(this.errores.length == 0)
            return { valido: true };
        return { valido: false, errores : this.errores };
    }
}

module.exports = validarIdUsuario;