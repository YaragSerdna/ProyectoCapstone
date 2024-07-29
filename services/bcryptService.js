const bcrypt = require('bcrypt');

/**
 * Obtiene una contraseña sin cifrar y devuelve una contraseña encriptada
 * @param {*} password 
 * @returns 
 */
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

/**
 * Obtiene una contraseña sin encriptar y una contraseña cifrada (almacenada en bd) y las compara
 * @param {*} inputPassword 
 * @param {*} storedPassword 
 * @returns 
 */
const comparePassword = async (inputPassword, storedPassword) => {
    return await bcrypt.compare(inputPassword, storedPassword);
};

module.exports = { hashPassword, comparePassword};