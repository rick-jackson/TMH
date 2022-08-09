import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [coo, setCoo] = useState(0);
  const move = (e) => {
    console.log(window.pageYOffset);
    if (coo > window.pageYOffset) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    setCoo(window.pageYOffset);
  };

  return (
    <div className="App" onTouchMove={move}>
      <Router>
        <Navigation showNav={showNav} />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
