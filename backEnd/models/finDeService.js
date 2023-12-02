// models/Patient.js
const mongoose = require('mongoose');

const finDeServiceSchema = new mongoose.Schema({
    employeId: String,
    finDeService: Date
});

const finDeService = mongoose.model('finDeService', finDeServiceSchema, "finDeService");

module.exports = finDeService;
