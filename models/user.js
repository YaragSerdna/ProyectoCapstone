const mongose = require ('mongose');

const UserSchema = new mongose.Scherma({
    username: {
        type: String,
        requires: true,
        unique: true
    },
    email: {
        type: String,
        requires: true,
        unique: true
    },
    password: {
        type: String,
        requires: true
    },
});