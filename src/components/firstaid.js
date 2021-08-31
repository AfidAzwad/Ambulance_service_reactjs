import React from "react";
import './style.css';
import logo from "../images/firstaid.png";
import elec from "../images/elec.jpg";
import heart from "../images/heart.jpg";
import snake from "../images/snake.jpg";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

function Firstaid() {
  return (
    <div class="firstaids" id="firstaid">
      <h1 style={{ fontWeight: "bold", padding: "40px" }}>
        First
        <img alt="image" src={logo} />
        Aid
      </h1>

      <Figure className="px-5">
        <Figure.Image alt="image" src={elec} />
        <Figure.Caption>
          <Link to="/electricshock">Electric Shock</Link>
        </Figure.Caption>
      </Figure>

      <Figure className="px-5">
        <Figure.Image alt="image" src={heart} />
        <Figure.Caption>
          <Link to="/heartattack">Heart Attack</Link>
        </Figure.Caption>
      </Figure>

      <Figure className="px-5">
        <Figure.Image alt="image" src={snake} />
        <Figure.Caption>
          <Link to="/snakebite">Snake Bite</Link>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default Firstaid;
