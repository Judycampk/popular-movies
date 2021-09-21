import Navbar from "./Components/Navbar";
import Peliculas from "./Views/Peliculas";
import Programas from "./Views/Programas";
import Personas from "./Views/Personas";
import Home from "./Views/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MoviesDetails from "./Components/MoviesDetails";
import TvDetails from "./Components/TvDetails";

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/peliculas">
        <Peliculas/>
      </Route>
      <Route exact path="/peliculas/:id">
        <MoviesDetails/>
      </Route>
      <Route exact path="/programas">
        <Programas/>
      </Route>
      <Route exact path="/programas/:id">
        <TvDetails/>
      </Route>
      <Route exact path="/personas">
        <Personas/>
      </Route>
      <Switch/>
    </Router>
  );
}

export default App;
