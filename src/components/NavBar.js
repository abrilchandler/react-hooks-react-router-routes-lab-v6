import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (

    <nav>
    <NavLink className="navbar" to="/">Home</NavLink>
    
      <NavLink className="navbar" to="/actors">Actors</NavLink>
  
      <NavLink className="navbar" to="/directors">Directors</NavLink>

     {/*} <NavLink className="navbar" to="/movies">Movies</NavLink>*/}
    </nav>
    );
};

export default NavBar;
