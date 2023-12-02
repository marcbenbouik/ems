import { Link } from "react-router-dom";
import { accueil } from "../../datas/accueil"
import "../sidebar/sidebar.scss"

function Sidebar({ open }) {
    return (
        open && (
            <aside className="aside">
                {accueil.map((element) => {
                    return (
                        <Link to={element.path} className="container">
                            <i></i>
                            <p className="sideTitle">{element.title}</p>
                        </Link>
                    )
                })}
            </aside>
        )
    )
}
export default Sidebar;