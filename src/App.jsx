import React from "react";
import './App.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div className="App container-fluid w-100 m-0 p-0">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;