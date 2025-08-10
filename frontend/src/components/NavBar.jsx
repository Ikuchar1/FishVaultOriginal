import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <div>
                <Link to="/">FishVault</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
            </div>
        </div>
    )
}

export default NavBar