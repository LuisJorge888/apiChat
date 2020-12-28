const registrarUsuario = require("../../logica/servicios/usuario/registrarUsuario"); 
const getUsuario = require("../../logica/servicios/usuario/getUsuario"); 
const loginUsuario = require("../../logica/servicios/usuario/loginUsuario");
const profileUsuario = require("../../logica/servicios/usuario/profileUsuario")

async function getUsersController(req, res, next) {
  
  const usuario = await getUsuario(req.params.id);
  if(usuario){
    res.status(200).json({
      ok: true,
      message: "Se ha traido la informacion del usuario.",
      usuario,
    });
  }else{
    res.status(200).json({
      ok: true,
      message: "Error al consultar, intentelo mas tarde."
    }); 
  }  
}

async function registerUserController(req, res, next) { 

  const usuario = await registrarUsuario({...req.body, img: req.file.filename});
  if(usuario){
    res.status(201).json({
      ok: true,
      message: "Se ha registrado con exito",
      usuario,
    });
  }else{
    res.status(200).json({
      ok: true,
      message: "Error al registrar, intentelo mas tarde."
    });
  }
}

async function loginUserController(req, res, next) { 

  const usuario = await loginUsuario(req.body);
  if(usuario){
    res.status(200).json({
      ok: true,
      message: "Se ha iniciado session con exito",
      usuario: usuario.usuario,
      token: usuario.token
    });
  }else{
    res.status(200).json({
      ok: true,
      message: "Error al iniciae session, email o contraseña incorrectos."
    });
  }  
}

async function profileUsersController(req, res, next) {
    
  const usuario = await profileUsuario(req.token);
  if(usuario){
    res.status(200).json({
      ok: true,
      message: "Se ha traido la informacion del usuario.",
      usuario,
    });
  }else{
    res.status(200).json({
      ok: true,
      message: "Error al consultar, intentelo mas tarde."
    }); 
  }  
}

async function test(req, res, next) {
  
  console.log("image: ",req.file);
  console.log("body: ",req.body.texto);
 
  res.status(200).json({
    ok: true,
    message: "Respuesta Test.",
    test : {
      num : 1,
      msg : "Test"
    }
  }); 
}

module.exports = {
  getUsersController,
  getUsersController,
  getUsersController,
  registerUserController,
  profileUsersController,
  loginUserController,
  test
}