import { CssBaseline, Container } from "@material-ui/core";
import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import userStore from "./components/UserStore";
import UserProfile from "./components/pages/UserProfile";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Container maxWidth="xs">
          <CssBaseline />
          <Switch>
            <Route exact path="/signin">
              <Signin userStore={userStore} />
            </Route>

            <Route exact path="/signup">
              <Signup userStore={userStore} />
            </Route>

            <Route exact path="/userprofile">
              <UserProfile userStore={userStore} />
            </Route>

            <Route exact path="/errorpage">
              <ErrorPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
