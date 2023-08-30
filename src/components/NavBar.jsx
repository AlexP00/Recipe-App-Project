import { Link } from "react-router-dom";
import '../styles/navbar.scss'
import Recipe from "../pages/Recipe";

const NavBar = () => {

    return (
        <>
        <nav className={"nav-container"}>
            <div className="left-text">
                 <Link to="/" >Recipe<span>-</span>App<span>!</span></Link>
            </div>
            <div className="right-text">
                <div className="links">
                <Link to={'/recipe'}>Recipe</Link>
                <Link to={'/populary'}>Populary</Link>
                </div>
                <div className="img">

                <img src="https://cdn-icons-png.flaticon.com/512/857/857681.png" alt="" />
                </div>
            </div>
            
        </nav>
        </>
    )
}
 
export default NavBar;