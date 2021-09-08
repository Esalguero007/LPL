import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Pay from "./components/pages/Pay";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/pay">
          <Pay />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
