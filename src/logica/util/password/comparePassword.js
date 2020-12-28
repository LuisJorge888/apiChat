const bcrypt = require('bcrypt');

async function comparePassword(plainTextPassword, hash){
 
    return await bcrypt.compare(plainTextPassword, hash);
}

module.exports = comparePassword;