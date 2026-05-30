import { Link } from "react-router-dom"
import "../App.css"

export default function Menu() {
    return (
        <nav className="menu">
            <Link to="/">HOME</Link>
            <a href="#habilidades">HABILIDADES</a>
            <Link to="/sobre">SOBRE</Link>
        </nav>
    )
}