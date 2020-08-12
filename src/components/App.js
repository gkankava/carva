import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/index.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
