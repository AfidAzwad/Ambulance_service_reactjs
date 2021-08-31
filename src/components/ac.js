import React from "react";
import "./style.css";
import ac from "../images/ac.png";
import { Figure } from "react-bootstrap";

export default function AC() {
  return (
    <div class="" id="nac" style={{ background: "ash" }}>
     <div class="infopage">
      <h1 style={{ fontWeight: "bold", padding: "15px" }}>AC Ambulance</h1>

      <Figure>
        <Figure.Image width={400} height={240} alt="image" src={ac} />
      </Figure>
      </div>

      <p class="aboutpara"
        style={{
          fontWeight: "bold",
        }}>
         Type : AC<br />
        Seat : 6<br />
         Base Fare : 1000 BDT <br />
           Fitness : Good <br />
          Items : Oxygen Cylinder, Nurse <br />
        </p>
    </div>
  );
}
