import "../footer/footer.scss"
import logo from "../../images/rogned_logo.png";
import reversedLogo from "../../images/reversed_logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="picture_background">
                <img className="logo" src={logo} alt="hospital logo" />
            </div>
            <h2 className="footerTitle">OCEAN MEDICAL CENTER</h2>
            <div className="picture_background">
                <img className="logo" src={reversedLogo} alt="hospital logo" />
            </div>
        </footer>
    )
}

export default Footer;