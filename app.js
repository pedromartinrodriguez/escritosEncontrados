// Requerir el modulo express
const express = require('express');

// Ejecutar la variable express
const app = express();

// Requiero el modulo Path
const path = require('path');

const publicPath = path.resolve(__dirname, 'public');

// Motor de plantilla
//app.set('view engine', 'ejs');

app.use(express.static('public'));
//app.set('views', path.resolve(__dirname, 'views'));  


//const mainRouter = require('./routes/main');

//app.use('/', mainRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/writings', (req, res) => {
    res.sendFile(path.join(__dirname, '/writings.html'));
});

app.get('/more', (req, res) =>{
    res.sendFile(path.join(__dirname, '/more.html'));
});

app.get('/contact', (req, res) =>{
    res.sendFile(path.join(__dirname, '/contact.html'));
});

//app.listen(3002, () =>
//    console.log('Servidor corriendo en el puerto 3002')
//);

// Configuracion para Heroku

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3002');
})

