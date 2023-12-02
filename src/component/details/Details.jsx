import "../details/details.scss"

function Details({ infos }) {
    console.log(infos)
    let dateObj = new Date(infos.birth)
    let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    let dateFrancaise = dateObj.toLocaleDateString('fr-FR', options);
    return (
        <div className="detailContainer">
            <ul className="detailElement">
                <li>Date de naissance : {dateFrancaise}</li>
                <li>Taille : {infos.size} cm</li>
                <li>Sexe : {infos.sexe}</li>
                <li>Groupe sanguin : {infos.groupeSanguin}</li>
                <li>Téléphone : {infos.number}</li>
            </ul>
        </div>
    )
}
export default Details