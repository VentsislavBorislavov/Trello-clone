import React from "react";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AuthPage from "./components/AuthPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Layout>
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
