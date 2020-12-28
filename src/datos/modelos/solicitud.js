
class solicitud {

    constructor(row) {
        
        this.id             = row.id;
        this.id_emisor      = row.id_emisor;
        this.id_receptor    = row.id_receptor;
        this.aceptada       = row.aceptada;
        this.create_at      = row.create_at;
        this.delete_at      = row.delete_at;
    }

    getUsuarioEmisor(){
        return null;
    }

    getUsuarioReceptor(){
        return null;
    }
}