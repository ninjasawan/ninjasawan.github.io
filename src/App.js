import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import("pages/Home"));
const LiveChart = lazy(() => import("pages/LiveChart"));
const NotFound = lazy(() => import("pages/NotFound"));

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/explore">
        <LiveChart />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
