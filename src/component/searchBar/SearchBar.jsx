import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../searchBar/searchBar.scss"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ liste, setListe }) {
    const handleInputChange = (event) => {
        const inputValue = event.target.value.toLowerCase();
        const filteredList = liste.filter((patient) =>
            patient.nom.toLowerCase().includes(inputValue) || patient.prenom.toLowerCase().includes(inputValue)
        );
        setListe(filteredList);
        console.log({ filteredList })
    }
    return (
        <div className="searchContainer">
            <input className="searchInput" type="text" placeholder="nom du patient"
                onChange={handleInputChange}
            />
            <i><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" bounce /></i>
        </div>
    )
}

export default SearchBar