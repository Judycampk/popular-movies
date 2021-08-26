import { Link } from "react-router-dom";
import palomitas from "./Img/palomitas.png";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-2 text-light ms-5">
            Movies
          </Link>
          <img src={palomitas} width="80px" alt=""  />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="./Programas" className="nav-link active ms-5 text-light" aria-current="page">
                  TV Shows
              </Link>
              <Link to="./Personas" className="nav-link ms-5 text-light">
                People
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar;