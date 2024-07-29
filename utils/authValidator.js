const { check } = require("express-validator");

const validateRegistration = [
    check('username').exists().notEmpty().isLength({min: 4, max: 40}).withMessage('El nombre de usuario es requerido'),
    check('email').exists().notEmpty().isEmail(), //pedro@bootcamp.institute
    check('password').exists().notEmpty().isLength({min: 8, max: 20})
];

const validateUserLogin = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty()
]

module.exports = { validateRegistration, validateUserLogin}
