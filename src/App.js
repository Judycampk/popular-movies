import Navbar from "./Components/Navbar";
import Peliculas from "./Components/Peliculas";
import Programas from "./Components/Programas";
import Personas from "./Components/Personas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch/>
      <Route exact path="/">
      <Peliculas/>
      </Route>
      <Route exact path="/programas">
        <Programas/>
      </Route>
      <Route exact path="/personas">
      <Personas/>
      </Route>
      <Switch/>
    </Router>
  );
}

export default App;
