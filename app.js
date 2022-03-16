const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');
const nodemailer = require('nodemailer');

app.use(express.static('public'));
app.set('views', path.resolve(__dirname, 'views'));  
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//const mainRouter = require('./routes/main');

//app.use('/', mainRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/writings', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/writings.html'));
});

app.get('/more', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/more.html'));
});

app.get('/contact', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/contact.html'));
});

//app.post('/send-email', (req, res) => {
  //  const { name, email, message } = req.body;
//
    //contentHTML = `
      //  <h1>Mail Information</h1>
    //    <ul>
          //  <li>Nombre: ${name}</li>
        //    <li>Email: ${email}</li>
      //  </ul>   
    //    <p>${message}</p> 
  //  `;
//
    //nodemailer.createTransport({
        //host: 'pedromrodriguez@gmail.com',
      //  port: 25,
    //    secure: false,
  //      auth: {
//
//        }
//    })
//
//    res.send('Olis');
//})

//app.listen(3002, () =>
//    console.log('Servidor corriendo en el puerto 3002')
//);

// Configuracion para Heroku

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
})

