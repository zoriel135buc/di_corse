import { useState } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Postlist from "./Components/Postlist";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2 ";
import Example3 from "./Components/Example3";
function App() {
  return (
    <>
      <ErrorBoundary>
        <nav className="navbar navbar-expend-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className={"navbar=brand"} to={`/`}>
              Home
            </NavLink>
            <NavLink className={"navbar=brand"} to={`/Profile`}>
              Profile
            </NavLink>
            <NavLink className={"navbar=brand"} to={`/Shop`}>
              Shop
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
        </Routes>
        <Postlist />
        <Example1 />
        <Example2 />
        <Example3 />
      </ErrorBoundary>
    </>
  );
}

export default App;
