import { useState } from "react";
import IdentityGrid from "../../component/identityGrid/IdentityGrid";
import SearchBar from "../../component/searchBar/SearchBar";
import "../patientListe/patientList.scss"

async function getPatient() {
    const response = await fetch("http://localhost:3001/patient")
    const data = await response.json();
    return data
}
const allPAtients = await getPatient()
function ListePatients() {
    const [filteredList, setFilteredList] = useState(allPAtients)
    return (
        <>
            <SearchBar setListe={setFilteredList} liste={allPAtients} />
            <IdentityGrid liste={filteredList} />
        </>
    )
}

export default ListePatients;