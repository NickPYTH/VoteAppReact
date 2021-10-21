import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Constructor from "./Constructor";
import VotePage from "./VotePage/VotePage";
import PublicStatsPage from "./Stats/PublicStatsPage";
import PrivateStatsLogin from "./Stats/PrivateStatsLogin";
import "./App.css";
import EmptyPage from "./EmptyPage";
import Navbar from "./Navbar/Navbar";
import Reducers from "./store/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

export default function App() {
  const store = createStore(Reducers);
  document.title = "VoteForms";
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/results/:a([0-9]+)"
              render={({ match }) => (
                <PublicStatsPage formKey={match.params.a} />
              )}
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
    </Provider>
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
