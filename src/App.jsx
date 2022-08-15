import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import { Provider } from "react-redux/es/exports";
import { store } from "./store/store";

function App() {
  const [showNav, setShowNav] = useState(true);

  let lastScroll = 0;
  const defaultOffset = 200;

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const handleScroll = () => {
    if (scrollPosition() > lastScroll && scrollPosition() > defaultOffset) {
      setShowNav(false);
    } else if (scrollPosition() < lastScroll) {
      setShowNav(true);
    }

    lastScroll = scrollPosition();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
