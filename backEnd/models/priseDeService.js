// models/Patient.js
const mongoose = require('mongoose');

const priseDeServiceSchema = new mongoose.Schema({
    employeId: String,
    priseDeService: Date
});

const priseDeService = mongoose.model('priseDeService', priseDeServiceSchema, "priseDeService");

module.exports = priseDeService;
