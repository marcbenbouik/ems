import { useEffect, useState } from "react";
import Header from "../../component/header/Header"
import "../pointeuse/pointeuse.scss"

async function getPrises() {
    const response = await fetch("http://localhost:3001/prise/2")
    const data = await response.json();
    return data
}

async function getFins() {
    const response = await fetch("http://localhost:3001/fin/2")
    const data = await response.json();
    return data
}
const [prises, setPrises] = await getPrises()

async function priseDeService() {
    const url = "http://localhost:3001/prise";

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            employeId: 2,
            priseDeService: new Date('2018-09-22T15:00:00'),
        }),
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la prise de service :', error);
        throw error; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
    }
}

async function finDeService() {
    const url = "http://localhost:3001/fin";

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            employeId: 2,
            finDeService: new Date('2018-09-22T18:00:00'),
        }),
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la fin de service :', error);
        throw error; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
    }
}


const fins = await getFins()
console.log(fins)
function Pointeuse() {
    const [prises, setPrises] = useState([]);
    const [fins, setFins] = useState([]);

    const updatePrises = async () => {
        const data = await getPrises();
        setPrises(data);
    };

    const updateFins = async () => {
        const data = await getFins();
        setFins(data);
    };

    useEffect(() => {
        // Mise à jour initiale des prises et fins lors du montage du composant
        updatePrises();
        updateFins();
    }, []);
    return (
        <div className="pointeuse">
            <section className="horodatage">
                <div className="buttonDiv">
                    <button className="blue button" onClick={() => priseDeService()}>Prise de service</button>
                    <button className="red button" onClick={() => finDeService()}>Fin de service</button>
                </div>
                <div className="horaireDiv">
                    <div className="priseDiv">
                        {prises.map((prise) => (
                            <p key={prise._id}>{prise.priseDeService}</p>
                        ))}
                    </div>
                    <div className="finDiv">
                        {fins.map((fin) => (
                            <p key={fin._id} > {fin.finDeService}</p>
                        ))}
                    </div>
                </div>
            </section >
            <section className="hoursSection">
                <p className="hours">Heures totales : 10h</p>
                <p className="hours">Service en cours : 2h10</p>
            </section>
        </div >
    )
}

export default Pointeuse