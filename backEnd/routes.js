// // apiRoutes.js
// const express = require('express');
// const router = express.Router();
// const Patient = require('./models/patient')

// // Exemple de route pour récupérer des données
// router.get('/fetchPatient', async (req, res) => {
//     // Effectuez l'opération de récupération de données ici
//     try {
//         const allPatients = await Patient.find();
//         console.log(req.body);
//         res.json(allPatients);
//     } catch (error) {
//         console.error("Erreur lors de la récupération des patients :", error);
//         res.status(500).json({ message: 'Erreur lors de la récupération des patients' });
//     }

// });

// // Exemple de route pour envoyer des données
// router.post('/sendPAtient', (req, res) => {
//     // Effectuez l'opération d'envoi de données ici
//     const receivedData = req.body;
//     res.json({ message: 'Données reçues avec succès', data: receivedData });
// });

// module.exports = router;
