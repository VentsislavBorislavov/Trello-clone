import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
