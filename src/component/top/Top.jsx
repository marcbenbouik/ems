import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";

function Top() {
    const location = useLocation()
    const path = location.pathname
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setIsOpen(false)
    }, [path])
    return (
        <div>
            <Header clicked={isOpen} setClicked={setIsOpen} />
            <Sidebar open={isOpen} />
        </div>
    )
}

export default Top