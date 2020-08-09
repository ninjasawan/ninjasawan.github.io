import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "App";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { HashRouter } from "react-router-dom";
import theme from "theme";
import * as serviceWorker from "serviceWorker";
import { ErrorBoundary } from "components";
import { AppLoader } from "components";

const MainApp = (
  <>
    <ErrorBoundary>
      <Suspense fallback={<AppLoader isLoading />}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <CssBaseline />
            <App />
          </HashRouter>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
    <style jsx="true" global="true">{`
      #stockchartplotline_Secondary_Element {
        display: none;
      }
    `}</style>
  </>
);

ReactDOM.render(MainApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
