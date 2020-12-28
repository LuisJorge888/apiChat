const btn_registrar = document.getElementById("id_registrar");
const form_registro = document.getElementById("input[type='file']");

btn_registrar.addEventListener("click", registrarUsuario)

function registrarUsuario(){

    usuario = {
        nombre:  document.getElementById("nombre").value,
        apellido:  document.getElementById("apellido").value,
        email:  document.getElementById("email").value,
        password:  document.getElementById("password").value,
        img: (document.getElementById("img").files[0] != undefined ) ? document.getElementById("img").files[0] : null  
    }

    document.getElementById("img").files != undefined ? alert("Algo"): alert("Nada")  

    let formData = new FormData();
    formData.append("nombre", 'carloz');
    formData.append("apellido", 'cardozo');
    formData.append("email", 'koko@gmail.com');
    formData.append("password", '12345678');
    formData.append("img", usuario.img);
    //for (const property in usuario) {
    //    formData.append(`${property}`,`${usuario[property]}` );
    //}
    peticion(usuario); 
}

function peticion(usuario){
    
    fetch('http://localhost:4000/test', {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(function(response) {
        if(response.ok) {
            alert("Se ha registrado.");
        } else {
           alert("Algo salio mal")
        }
    });
}