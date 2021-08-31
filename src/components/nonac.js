import React from "react";
import "./style.css";
import nonac from "../images/nonac.png";
import { Figure } from "react-bootstrap";

export default function Nonac() {
  return (
    <div class="" id="nonac" style={{ background: "ash" }}>
     <div class="infopage">
      <h1 style={{ fontWeight: "bold", padding: "15px" }}>Non AC Ambulance</h1>

      <Figure>
        <Figure.Image width={400} height={240} alt="image" src={nonac} />
      </Figure>
      </div>

      <p class="aboutpara"
        style={{
          fontWeight: "bold",
        }}>
         Type : Non AC <br />
           Seat : 6 <br />
           Base Fare : 500 BDT <br />
          Fitness : Good <br />
         Items : Oxygen Cylinder, Nurse
        </p>
    </div>
  );
}
