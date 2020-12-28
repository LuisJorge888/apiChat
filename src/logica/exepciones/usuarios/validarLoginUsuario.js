const existeEmail = require("../../../datos/repositorio/usuario/existeEmail");

class validarLoginUsuario {

    constructor(){
        this.message = "Error al consultar usuario, verifique los siguientes errores.";
        this.errores = [];
        this.atributos = ['email','password'];
    }

    async validarCampos(peticion){
        
        console.log("peticion: "+peticion)
        this.atributos.forEach(element => {
            if(!peticion.hasOwnProperty(element))
                this.errores.push(`El parametro '${element}' es requerido.`);
            else {
                if(peticion[element] == '')
                    this.errores.push(`El parametro '${element}' no puede estar vacio.`);
            }
        });
    }

    async validarCamposUnicos(peticion){

        if(peticion.id != ""){
            const existe = await existeEmail(peticion.email);
            if(!existe) this.errores.push(`Error usuario no encontrado.`);
        }
    }

    async validar(peticion){

        this.validarCampos(peticion);
        await this.validarCamposUnicos(peticion);

        if(this.errores.length == 0)
            return { valido: true };
        return { valido: false, errores : this.errores };
    }
}

module.exports = validarLoginUsuario;