import React from "react";
import "./style.css";
import freeze from "../images/freezer.png";
import { Figure } from "react-bootstrap";

export default function Freezer() {
  return (
    <div class="" id="freezer" style={{ background: "ash" }}>
      <div class="header">Freezer Ambulance</div>

      <div class="infopage">
        <Figure>
          <Figure.Image width={400} height={240} alt="image" src={freeze} />
        </Figure>
      </div>

      <p
        class="aboutpara"
        style={{
          fontWeight: "bold",
        }}
      >
        Type : Deep Freeze <br />
        Seat : 1 <br />
        Base Fare : 3500 BDT <br />
        Fitness : Good <br />
        Items : Oxygen Cylinder, Nurse
      </p>
    </div>
  );
}
