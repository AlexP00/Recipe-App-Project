import { Link } from "react-router-dom";
import '../styles/navbar.scss'

const NavBar = () => {
    return (
        <>
        <nav className="nav-container">
            <div className="left-text">
                 <Link to="/" >Recipe<span>-</span>App<span>!</span></Link>
            </div>
            <div className="right-text">
                <div className="links">
                <Link>Recipe</Link>
                <Link>Populary</Link>
                </div>
                <button>
                    <img 
                    src="https://www.iconbolt.com/iconsets/bytesize-icons/moon.svg"
                     alt="moon" />
                     <p>Dark Mode</p>
                </button>
            </div>
            
        </nav>
        </>
    )
}
 
export default NavBar;