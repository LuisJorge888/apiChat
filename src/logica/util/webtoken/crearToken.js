const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../../../conf');

function crearToken(usuario){

    return jwt.sign({usuario}, PRIVATE_KEY);
}

module.exports = crearToken;