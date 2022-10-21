import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Main";
import Search from "./Search";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/Search" element={<Search></Search>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
