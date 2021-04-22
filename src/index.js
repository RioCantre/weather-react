import React from "react";
import ReactDom from "react-dom";
import Forecast from "./Forecast";
import SearchEngine from "./SearchEngine";


import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <div id="background" >
        <div className="row gx-1">
          <div className="col-8 order-last">

          <SearchEngine  defaultCity="New York"/>

          </div>
          
          <div className="col-3 order-first">
            <div id="days">

              <Forecast />

              <Forecast />
               
              <Forecast />
               
              <Forecast />

              <Forecast />

              <Forecast />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

