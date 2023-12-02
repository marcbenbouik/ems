const express = require('express');
const Patient = require('./models/patient')
const PriseDeService = require('./models/priseDeService')
const FinDeService = require('./models/finDeService')
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

app.get('/prise', async (req, res, next) => {
    console.log('Requête reçue !');
    try {
        console.log('Requête reçue !');
        const allStart = await PriseDeService.find();
        res.json(allStart);
    } catch (error) {
        console.error("Erreur lors de la récupération des patients :", error);
        next(error);
    }
});
app.get('/fin', async (req, res, next) => {
    console.log('Requête reçue !');
    try {
        console.log('Requête reçue !');
        const allEnd = await FinDeService.find();
        res.json(allEnd);
    } catch (error) {
        console.error("Erreur lors de la récupération des patients :", error);
        next(error);
    }
});

app.get('/prise/:employeId', async (req, res, next) => {
    const employeId = req.params.employeId;
    console.log('Requête reçue !');
    try {
        console.log('Requête reçue !');
        const prises = await PriseDeService.find({ employeId });
        res.json(prises);
    } catch (error) {
        console.error("Erreur lors de la récupération des patients :", error);
        next(error);
    }
});

app.get('/fin/:employeId', async (req, res, next) => {
    const employeId = req.params.employeId;
    console.log('Requête reçue !');
    try {
        console.log('Requête reçue !');
        const fins = await FinDeService.find({ employeId });
        res.json(fins);
    } catch (error) {
        console.error("Erreur lors de la récupération des patients :", error);
        next(error);
    }
});

app.post('/prise', async (req, res, next) => {
    console.log('Requête reçue !');
    try {
        const { employeId, priseDeService } = req.body;
        const newPointage = new PriseDeService({
            employeId,
            priseDeService
        });
        const result = await newPointage.save();
        res.json({ message: 'Prise de service ajoutée avec succès', data: result });
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la prise de service :', error);
        next(error);
    }

});

app.post('/fin', async (req, res, next) => {
    console.log('Requête reçue !');
    try {
        const { employeId, finDeService } = req.body;
        const newPointage = new FinDeService({
            employeId,
            finDeService
        });
        const result = await newPointage.save();
        res.json({ message: 'Fin de service ajoutée avec succès', data: result });
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la fin de service :', error);
        next(error);
    }

});

module.exports = app;