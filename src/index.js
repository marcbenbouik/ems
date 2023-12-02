import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/reset.css"
import "../src/styles/style.scss"
import Footer from './component/footer/Footer';
import Home from './pages/home/Home';
import ListePatients from './pages/patientListe';
import Top from './component/top/Top';
import DossierMedical from './pages/dossierMedical/DossierMedical';
import NouveauPatient from './pages/nouveuPatient';
import Pointeuse from './pages/pointeuse';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <main>
        <Top />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/patient_list' element={<ListePatients />} />
          <Route path='/patient_list/:id' element={<DossierMedical />} />
          <Route path='/patient_list/new_patient' element={<NouveauPatient />} />
          <Route path='/pointeuse' element={<Pointeuse />} />
          <Route path='/tarification' />
          <Route path='/convalescence' />
          <Route path='/tenues' />
          <Route path='specialites' />
          <Route path='/rh' />
          <Route path='/autres' />
        </Routes>
        <Footer className="footer" />
      </main>
    </Router>
  </React.StrictMode>
);


