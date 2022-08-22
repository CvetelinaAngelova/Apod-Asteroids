import React, { Component } from "react";
import { Route, Routes, NavLink, BrowserRouter } from "react-router-dom";
import Header from "./partials/header";


import Home from "./pages/home";
import Asteroids from "./pages/asteroids";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          {/* <Main /> */}

          <div className="mainCotainer">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/asteroids" element={<Asteroids />} />
            </Routes>
          </div>
        </BrowserRouter>
    
      </div>
    );
  }
}

export default App;
