const path = require('path');
const rootDir = require('../utils/rootpath');
const Home = require('../models/home');

const registeredHomes = [];

// startup pe file se existing data load karke array fill kar do
Home.fetchAll((homes) => {
    registeredHomes.push(...homes);
});

exports.getAddHome = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-home.html'));
};

exports.addHome = (req, res, next) => {
    console.log('entering details');
    if (!req.body.housename || !req.body.mail) {
        console.log('details were not sufficient');
        return res.redirect("/retry");
    }

    const exists = registeredHomes.some((obj) => {
        return obj.houseName === req.body.housename;
    });

    if (exists) {
        return res.send(`<h1>Already Registered</h1>`);
    }

    console.log(`${req.body.housename} is registered and owner is ${req.body.mail}`);

    const home = new Home(req.body.housename, req.body.mail, req.body.location, req.body.price);
    home.save();          // file mein save
    registeredHomes.push(home);   // array bhi update — yahi missing piece tha

    console.log('updated list:', registeredHomes);
    res.sendFile(path.join(rootDir, 'views', 'registered.html'));
};

exports.registeredHomes = registeredHomes;