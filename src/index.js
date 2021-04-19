import React from "react";
import ReactDom from "react-dom";
import Date from "./Date";
import Quote from "./Quote";
import Weekname from "./Weekname";
import Forecast from "./Forecast";
import DailyTemp from "./DailyTemp";
import City from "./City";
import SearchEngine from "./SearchEngine";

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <div id="background" className="weather1 weather2 weather3">
        <div className="row gx-1">
          <div className="col-8 order-last">
            <City />
            <Date />

            <Quote />

            <SearchEngine />
          </div>
          <div className="col-3 order-first">
            <div id="days">
              <section>
                <Weekname />
                <Forecast />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <DailyTemp />
              </section>
              <section>
                <Weekname />
                <Forecast />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <DailyTemp />
              </section>
              <section>
                <Weekname />
                <Forecast />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <DailyTemp />
              </section>
              <section>
                <Weekname />
                <Forecast />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <DailyTemp />
              </section>
              <section>
                <Weekname />
                <Forecast />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <DailyTemp />
              </section>
              <section>
                <Weekname />
                <Forecast />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <DailyTemp />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

