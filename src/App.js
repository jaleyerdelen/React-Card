import React from "react";
import "./style.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
          <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
