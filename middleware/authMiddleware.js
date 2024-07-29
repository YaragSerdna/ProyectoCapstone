const jwtService = require('../services/jwtService');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer', '');
    if (!token) {
        return res.status(401).json({ msg: 'Sin token, autorización denegada'});
    }
    
    const decoded = jwtService.verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ msg: 'Token no valido'});
    }

    req.user = decoded.user;
    next();
}


module.exports = authMiddleware;