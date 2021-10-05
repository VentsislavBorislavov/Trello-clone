import React from "react";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Board from "./components/board/Board";
import AuthPage from "./components/auth/AuthPage";
import Home from "./components/home/Home";
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
          <Route path="/board">
            <Board />
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
