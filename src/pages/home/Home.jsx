import Gallery from "../../component/gallery/Gallery";
import Title from "../../component/title/Title";
import { accueil } from "../../datas/accueil";
import "../home/home.scss"

function Home() {
    return (
        <div className="homeContainer">
            <Title titre={"Page d'acceuil"} />
            <Gallery liste={accueil} />
        </div>
    )
}

export default Home;