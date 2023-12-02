import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../thumbnail/thumbnail.scss"

function Thumbnail({ title, path, id, index }) {

    const clair = "#70C6EB"
    const fonce = "#004E87"
    const [backColor, setBackColor] = useState(clair)
    const [textColor, setTextColor] = useState(fonce)

    useEffect(() => {
        if (index < 4) {
            if (index % 2 === 0) {
                setBackColor(clair)
                setTextColor(fonce)
            }
            else {
                setBackColor(fonce)
                setTextColor(clair)
            }
        }
        else if (index > 3) {
            if (index % 2 === 0) {
                setBackColor(fonce)
                setTextColor(clair)
            }
            else {
                setBackColor(clair)
                setTextColor(fonce)
            }
        }
    }, [index])
    const background = { backgroundColor: backColor }
    const text = { color: textColor }
    return (
        <Link to={path} className="link">
            <div className="background" style={background}>
                <h3 style={text}>{title}</h3>
            </div>
        </Link>
    )
}

export default Thumbnail;