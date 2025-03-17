import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar=()=>
{
    return(
        <nav className="navbar">
            <p className="update-expenses">
                <Link to="/expenses">Update the expenses</Link>
            </p>
            <ul className="nav-links">
                <li><Link to="learn">Learn</Link></li>
                <li><Link to="/expenses">Expenses</Link></li>
                <li><Link to="/savings">Savings</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar