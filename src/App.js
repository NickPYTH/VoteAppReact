import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Constructor from "./Constructor";
import VotePage from "./VotePage/VotePage";
import PublicStatsPage from "./Stats/PublicStatsPage";
import PrivateStatsLogin from "./Stats/PrivateStatsLogin";
import "./App.css";
import EmptyPage from "./EmptyPage";
import Navbar from "./Navbar/Navbar";

export default function App() {
  let navLinkStyles = {
    fontSize: 20 + "px",
  };
  let navbarTextStyles = {
    fontSize: 32 + "px",
    color: "white",
    outline: "none",
  };
  document.title = "VoteForms";

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route
            exact
            path="/results/:a([0-9]+)"
            render={({ match }) => <PublicStatsPage formKey={match.params.a} />}
          />
          <Route
            exact
            path="/:a([0-9]+)"
            render={({ match }) => <VotePage formKey={match.params.a} />}
          />
          <Route path="/constructor">
            <Constructor />
          </Route>
          <Route path="/edit">
            <EmptyPage />
          </Route>
          <Route path="/stats">
            <PrivateStatsLogin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Опачки!</h1>
        <p className="lead">Тут будет главная страница :)</p>
      </div>
    </div>
  );
}
