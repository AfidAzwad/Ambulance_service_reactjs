import React from "react";
import "./style.css";
import icu from "../images/icu.png";
import { Figure } from "react-bootstrap";

export default function ICU() {
  return (
    <div id="icu" style={{ background: "ash" }}>
      <div class="header">ICU Ambulance</div>

      <div class="infopage">
        <Figure>
          <Figure.Image width={400} height={240} alt="image" src={icu} />
        </Figure>
      </div>
      <p
        class="aboutpara"
        style={{
          fontWeight: "bold",
        }}
      >
        Type : ICU <br />
        Seat : 1 <br />
        Base Fare : 5500 BDT <br />
        Fitness : Good <br />
        Items : Oxygen Cylinder, Nurse, ICU accessories
      </p>
    </div>
  );
}
