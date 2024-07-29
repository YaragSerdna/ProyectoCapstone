const bcryptService = require('../services/bcryptService');
const jwtService = require('../services/jwtService');
const User = require('../models/user');
const {matchedData} = require ('express-validator');

const registerUser = async(req, res) =>{
    try{
        const {username, email, password} = matchedData(req);

        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg :'Usuario Ya Registrado'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500).send('Error en el servidor')
    }
};

const longinUser = async (req, res) => {
    try {
        const {email, password} = matchedData(req);

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: 'Credenciales invalidas'});
        }
        const payload = {};
    }
    catch(error){
        console.log(error.message);
        res.status(500).send('Error en el servidor')
    }
};