// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    prenom: String,
    nom: String,
    birth: Date,
    size: Number,
    groupeSanguin: String,
    sexe: String,
    number: Number

});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
