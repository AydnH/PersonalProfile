import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Work from "./pages/work.js";
import Skills from "./pages/skills.js";
import Contact from "./pages/contact.js";
import NavBar from "./components/nav/navBar.js";
import Sketch from "./components/p5/sketchComponent.js";
// import Footer from "./components/footer/footer.js";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Redirect from="/" to="/Home" />
        {/* background draws before other components render to always display on bottom of z axis */}
        <div className="Background">
          <Sketch />
        </div>
        {/* routes render page components */}
        <main style={{ marginTop: "50px", position: "relative" }}>
          <Route path="/Home" exact component={Home} />
          <Route path="/Work" exact component={Work} />
          <Route path="/Skills" exact component={Skills} />
          <Route path="/Contact" exact component={Contact} />
        </main>
        {/* nav bar always renders on top of z axis */}
        <NavBar />
      </div>

      {/* didnt end up needing footer */}
      {/* <div className="footer">
        <Footer />
      </div> */}
    </HashRouter>
  );
}

export default App;
