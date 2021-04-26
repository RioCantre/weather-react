import React from "react";
import ReactDom from "react-dom";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <SearchEngine defaultCity="New York" />
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

