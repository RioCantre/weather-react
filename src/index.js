import React from "react";
import ReactDom from "react-dom";
import SearchEngine from "./SearchEngine";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <div className="container">
          <div id="background" >
            <SearchEngine defaultCity="New York" />
          </div>
      </div>
      <footer className="bottom-text">
        <a href="https://github.com/RioCantre" target="_blank" rel="noreferrer">Open-source</a>
        code by&nbsp;
        <span className="name">
          <a href="https://www.shecodes.io/students/316-rio-cantre" target="_blank" rel="noreferrer"> Rio Cantre </a> 
        </span>
      </footer>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

