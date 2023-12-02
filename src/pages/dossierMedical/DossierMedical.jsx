import { useParams } from "react-router-dom"
import Details from "../../component/details/Details";
import Title from "../../component/title/Title";
import Dossier from "../../component/dossier/Dossier";
import Annotation from "../../component/annotation/Annotation";
import InterButton from "../../component/interButton/InterButton";
import Rating from "../../component/rating/rating";
import "../dossierMedical/dossierMedical.scss"


async function getPatient() {
    const response = await fetch("http://localhost:3001/patient")
    const data = await response.json();
    return data
}
const allPatients = await getPatient()
console.log({ allPatients })
function DossierMedical() {
    const { id } = useParams();
    console.log({ id });
    const uniquePatient = allPatients.filter((element) => element._id === id)
    console.log({ uniquePatient })
    return (
        <div className="dossierContainer">
            <Title titre={uniquePatient[0].prenom + " " + uniquePatient[0].nom} />
            <div className="detailsContainer">
                <Details infos={uniquePatient[0]} />
                <div className="interactionContainer">
                    <Annotation title={"Annotations"} />
                    <Rating />
                    <InterButton />
                    <Annotation title={"VM"} />
                </div>
            </div>
            <Dossier />
        </div>

    )
}
export default DossierMedical