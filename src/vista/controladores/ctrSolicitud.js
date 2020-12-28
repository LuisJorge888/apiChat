const registrarSolicitud = require("../../logica/servicios/solicitudes/registrarSolicitud");
const misSolicitudes = require("../../logica/servicios/solicitudes/misSolicitudes");

async function registerSolicitudController(req, res, next) { 

  const solicitud = await registrarSolicitud({token: req.token, peticion: req.body});
  if(solicitud){
    res.status(201).json({
      ok: true,
      message: "Se ha enviado la solicitud",
      solicitud,
    });
  }else{
    res.status(200).json({
      ok: true,
      message: "Error al enviar, intentelo mas tarde."
    });
  }
}

async function misSolicitudesController(req, res, next) { 

  const solicitud = await misSolicitudes({token: req.token, peticion: req.body});
  if(solicitud){
    res.status(201).json({
      ok: true,
      message: "Se ha retornado las solicitudes",
      solicitud,
    });
  }else{
    res.status(200).json({
      ok: true,
      message: "No posee solicitudes."
    });
  }
}

module.exports = {
  registerSolicitudController,
  misSolicitudesController
}