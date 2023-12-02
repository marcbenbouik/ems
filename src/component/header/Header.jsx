import { Link } from "react-router-dom";
import "../header/header.scss";
import { faBars, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header({ clicked, setClicked }) {

    function setOpen() {
        setClicked(!clicked)
    }
    return (
        <header className="header">
            <i className="menu"><FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#FFFF", }} onClick={setOpen} /></i>
            <div className="identity">
                <div className="profil_pic"></div>
                <h1 className="name">Mathis Tambul</h1>
            </div>
            <Link to={"/"} className="home"><i><FontAwesomeIcon icon={faHouseUser} size="2xl" style={{ color: "#004e87", }} /></i></Link>
        </header>
    )
}

export default Header;