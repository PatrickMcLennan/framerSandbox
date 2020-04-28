import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyles, theme } from "./utils/resets.style";

import Home from "View/Home/Home";

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
