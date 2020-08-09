import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistoricalData } from "hooks";
const Home = lazy(() => import("pages/Home"));
const Historical = lazy(() => import("pages/Historical"));
const LiveChart = lazy(() => import("pages/LiveChart"));
const NotFound = lazy(() => import("pages/NotFound"));

function App() {
  const historicalData = useHistoricalData();

  return (
    <Switch>
      <Route exact path="/">
        <Home {...historicalData} />
      </Route>
      <Route exact path="/historical">
        <Historical {...historicalData} />
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
