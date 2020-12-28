const existeEmail = require("../../../datos/repositorio/usuario/existeEmail");

class validarCrearUsuario {

    constructor(){
        this.message = "Error al registrar, verifique los siguientes errores.";
        this.errores = [];
        this.atributos = ['nombre', 'apellido', 'email', 'password', 'img'];
    }

    async validarCampos(peticion){
        
        this.atributos.forEach(element => {
            if(!peticion.hasOwnProperty(element))
                this.errores.push(`El parametro '${element}' es requerido.`);
            else {
                if(peticion[element] == '')
                    this.errores.push(`El parametro '${element}' no puede estar vacio.`);
                if(element == "password" && peticion[element].length < 8 )
                    this.errores.push(`El parametro '${element}' debe tener almenos 8 digitos.`);
            }
        });
    }

    async validarCamposUnicos(peticion){

        const existe = await existeEmail(peticion.email);
        if(existe) this.errores.push(`Email ya utilizado.`);  
    }

    async validar(peticion){

        this.validarCampos(peticion);
        await this.validarCamposUnicos(peticion);

        if(this.errores.length == 0)
            return { valido: true };
        return { valido: false, errores : this.errores };
    }
}

module.exports = validarCrearUsuario;