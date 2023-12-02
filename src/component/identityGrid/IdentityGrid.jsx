import "../identityGrid/identityGrid.scss";
import IdentitySquare from "../identitySquare/IdentitySquare";

function IdentityGrid({ liste }) {
    const sixSizeList = liste.slice(0, 5)
    return (
        <section className="section">
            {sixSizeList.map((element, index) => {
                return (
                    <IdentitySquare
                        key={element.prenom + element.nom}
                        nom={element.nom}
                        prenom={element.prenom}
                        birth={element.birth}
                        index={index}
                        id={element._id}
                    />
                );
            })}
            <IdentitySquare
                nom={"PATIENT"}
                prenom={"AJOUT"}
                birth={""}
                index={5}
                id={"new_patient"}
            />
        </section>
    );
}

export default IdentityGrid;
