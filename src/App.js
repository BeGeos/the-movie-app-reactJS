import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:movieId">
          <Movie />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
