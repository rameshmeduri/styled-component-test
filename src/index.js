import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <CardList />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
