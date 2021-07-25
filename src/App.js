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
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Constructor from "./Constructor";
import VotePage from "./VotePage/VotePage";
import PublicStatsPage from "./Stats/PublicStatsPage";
import PrivateStatsLogin from "./Stats/PrivateStatsLogin";
import "./App.css";
import EmptyPage from "./EmptyPage";

export default function App() {
  let navLinkStyles = {
    fontSize: 20 + "px",
  };
  let navbarTextStyles = {
    fontSize: 32 + "px",
    color: "white",
    outline: "none",
  };
  document.title = 'VoteForms';

  return (
    <div>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link style={navbarTextStyles} to="/">
              Vote Forms
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link>
                <Link
                  style={navLinkStyles}
                  to="/constructor"
                  className="nav-link active h4"
                >
                  Конструктор
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={navLinkStyles}
                  to="/edit"
                  className="nav-link active h4"
                >
                  Редакция
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={navLinkStyles}
                  to="/stats"
                  className="nav-link active h4"
                >
                  Статистика
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
    <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Опачки!</h1>
            <p class="lead">Тут будет главная страница :)</p>
          </div>
        </div>
  )
  ;
}