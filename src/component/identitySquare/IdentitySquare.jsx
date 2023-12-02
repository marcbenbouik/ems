import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../identitySquare/identitySquare.scss"

function IdentitySquare({ nom, prenom, birth, index, id }) {
    const clair = "#70C6EB"
    const fonce = "#004E87"
    const [backColor, setBackColor] = useState(clair)
    const [textColor, setTextColor] = useState(fonce)
    let dateObj = new Date(birth)
    let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    let dateFrancaise = dateObj.toLocaleDateString('fr-FR', options);
    useEffect(() => {
        if (index < 3) {
            if (index % 2 === 0) {
                setBackColor(clair)
                setTextColor(fonce)
            }
            else {
                setBackColor(fonce)
                setTextColor(clair)
            }
        }
        else if (index > 2) {
            if (index % 2 === 0) {
                setBackColor(clair)
                setTextColor(fonce)

            }
            else {
                setBackColor(fonce)
                setTextColor(clair)
            }
        }
    }, [index])
    const background = { backgroundColor: backColor }
    const text = { color: textColor }
    return (
        <Link to={`/patient_list/${id}`} className="link">
            <div className="background" style={background}>
                <h3 className="name" style={text}>{prenom + " " + nom}</h3>
                <p className="birth" style={text}>{birth === "" ? "" : dateFrancaise}</p>
            </div>
        </Link>
    )
}

export default IdentitySquare;