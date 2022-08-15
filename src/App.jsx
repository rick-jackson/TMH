import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import { Provider } from "react-redux/es/exports";
import { store } from "./store/store";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [coo, setCoo] = useState(window.pageYOffset);
  const handleScroll = (e) => {
    // console.log(e)
    let currentScrollPos = window.pageYOffset;

    if (coo > currentScrollPos || currentScrollPos === 0) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    setCoo(currentScrollPos);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("touch", handleScroll);
  }, []);

  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navigation showNav={showNav} />
          <Main />
          <Footer />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
