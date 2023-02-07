import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Componet/Navbar/Navbar";
import Allroutes from "./Routes/Allroutes";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Componet/Navbar/cards/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
