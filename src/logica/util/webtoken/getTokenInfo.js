const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../../../conf');

function getInfoToken(token){
    return jwt.verify(token, PRIVATE_KEY, (error, data) => {
        if(error) return null;
        return data;
    })
}

module.exports = getInfoToken;