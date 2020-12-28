const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../../../conf');

function verificarToken(token){
    return jwt.verify(token, PRIVATE_KEY, (error, _data) => {
        if(error) return false;
        return true;
    })
}

module.exports = verificarToken;