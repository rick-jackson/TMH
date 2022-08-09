import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
