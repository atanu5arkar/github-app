import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar bg-primary">
            <h2>
                <i className="fab fa-github"></i> GitHub App
            </h2>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/about"> About Us </Link>
                </li>
                <li>
                    <Link to="/contact"> Contact </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar