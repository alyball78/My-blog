import { NavLink } from "react-router-dom";
import "./NavBar.css";

    function NavBar() {

    return(
    <nav>
        <NavLink to="/">accueil</NavLink>
        <NavLink to="/articles">articles</NavLink>
        <NavLink to="/articles/new">créer un article</NavLink>

        <NavLink to="/blindCar">Etre aveugle et aimer la voiture</NavLink>
        <NavLink to="/astuces">Astuces pour reconnaitre une voiture tout en étant aveugle</NavLink>
        <NavLink to="/bestSeller">Nos coups de coeurs</NavLink>
        <NavLink to="/testimony">Témoignages d'aveugles pationnés de voiture</NavLink>
                
        <NavLink to="/contact">contact</NavLink>
        
        
        </nav>

    )
}
export default NavBar;
