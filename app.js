require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Rutas de la app
const authRoutes = require('./routes/authRoutes');

const app = express();

const port = process.env.APP_PORT || 5000;

// Middleware
app.use(express.json({extended: fañse}));
//app.use(express.urlencoded({extended: false}));

//rutas
app.get('/',(req,res) => {
    res.send('Hellos world');
});

app.use('/api/auth',authRoutes);

app.listen(port,()=>{

});

// Conectar a la base de datos
connectDB();