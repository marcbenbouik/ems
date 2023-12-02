const express = require('express');
const Patient = require('./models/patient')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/patient', async (req, res, next) => {
    console.log('Requête reçue !');
    try {
        console.log('Requête reçue !');
        const allPatients = await Patient.find();
        res.json(allPatients);
    } catch (error) {
        console.error("Erreur lors de la récupération des patients :", error);
        next(error);
    }
});

module.exports = app;