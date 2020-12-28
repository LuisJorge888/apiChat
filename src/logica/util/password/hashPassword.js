const bcrypt = require('bcrypt');

async function encriptarPassword(plainTextPassword){
    const salts = await bcrypt.genSalt();
    return await bcrypt.hash(plainTextPassword, salts);
}

module.exports = encriptarPassword;