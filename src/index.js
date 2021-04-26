import React from "react";
import ReactDom from "react-dom";
import SearchEngine from "./SearchEngine";


import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <SearchEngine defaultCity="New York" />
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

