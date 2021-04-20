import React from "react";

export default function Forecast() {
  return (

  <section>
    <h3 className="weekname"> Thursday</h3>
    <img className="outcome" src="src/image/02cs.png" alt="description" />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="degree">
        <span className="degree-cel"> </span>° |
        <span className="degree-fah"> </span>°
    </span>
    </section>

  )
}
