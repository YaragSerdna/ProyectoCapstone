const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authcontroller');
const {validateRegistration, validateUserLogin} = require('../utils/authValidator');
const validateResult = require ('../utils/handleValidator');

//Ruta para el registro de usuarios
router.post('/register',validateRegistration,validateResult,registerUser);

//Ruta para el login de los usuarios
router.post('/login',validateUserLogin,validateResult,loginUser);

module.exports= router;