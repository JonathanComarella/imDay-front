import './styles.css';
import logo from '../Images/logo_uol.png'

const Navbar = () => (
    <nav className="navbar textNavbar">
         <img src={logo} className="logo-uol"/>
        <p>Resolvedores responsáveis pelos incidentes</p>
    </nav>
)
export default Navbar;