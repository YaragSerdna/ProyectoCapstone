const roleMiddleware = (roles) => (req, res, next) => {
    if (!roles.include(req.user.role)) {
        return res.status(403).json({msg: 'Acceso denegado no tiene un rol'})
    }
    next();
}

module.exports = roleMiddleware;