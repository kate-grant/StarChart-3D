import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <h1>StarChart</h1>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
