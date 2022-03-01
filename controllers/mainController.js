const path = require('path');

const mainController = {

    index: (req, res) => {
        res.render('index.html');
    },

    writings: (req, res) => {
        res.render('writings');
    },

    more: (req, res) => {
        res.render('more');
    },

    about: (req, res) => {
        res.render('about');
    },

    contact: (req, res) => {
        res.render('contact');
    },

    message: (req, res) => {
        res.render('index');
    }

};


module.exports = mainController;
