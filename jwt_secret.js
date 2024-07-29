const crypto = require('cryoti');
const jwtSecret = crypto.randomBytes(32).toString('hex');
