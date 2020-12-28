const existeId = require("../../../datos/repositorio/usuario/existeId");
const existeSolicitudesPendiente = require("../../../datos/repositorio/solicitud/existeSolicitudPendiente");

class validarCrearSolicitud {

    constructor(){
        this.message = "Error al enviar la solicitud, verifique los siguientes errores.";
        this.errores = [];
        this.atributos = ['receptor'];
    }

    async validarCampos(peticion){
        
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
 
        const existeReceptor = await existeId(peticion.receptor);
        if(!existeReceptor) this.errores.push(`Error: Usuario no encontrado.`);
        if(existeSolicitudesPendiente(id_receptor, id_emisor)) this.errores.push(`Error: Ya existe la solicitud.`);
    }

    async validar(peticion){

        this.validarCampos(peticion);
        await this.validarCamposUnicos(peticion);

        if(this.errores.length == 0)
            return { valido: true };
        return { valido: false, errores : this.errores };
    }
}

module.exports = validarCrearSolicitud;