import React from "react";
import "./style.css";
import snake from "../images/snake.jpg";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Snakebite() {
  return (
    <div id="snake" style={{ background: "ash" }}>
      
      <div class="infopage">
        <h1 style={{ fontWeight: "bold", padding: "15px" }}>Snake Bite</h1>
        <Figure>
          <Figure.Image width={400} height={240} alt="image" src={snake} />
        </Figure>
      </div>

      <p class="aboutpara">
        Call 911 if:
        <ul>
          <li>There is any chance that the snake is venomous </li>
          <li>The person has difficulty breathing</li>
          <li>There is loss of consciousness</li>
        </ul>
        <b>1. Note the Snake's Appearance:</b>
        <ul>
          <li>Be ready to describe the snake to emergency staff.</li>
        </ul>
        <b>2. Protect the Person:</b> <br />
        While waiting for medical help:
        <ul>
          <li>Move the person beyond striking distance of the snake.</li>
          <li>Have the person lie down with wound below the heart.</li>
          <li>
            Keep the person calm and at rest, remaining as still as possible to
            keep venom from spreading.
          </li>
          <li>Cover the wound with loose, sterile bandage.</li>
          <li>Remove any jewelry from the area that was bitten.</li>
          <li>Remove shoes if the leg or foot was bitten.</li>
        </ul>
        <b>Do not:</b>
        <ul>
          <li>Cut a bite wound</li>
          <li>Attempt to suck out venom</li>
          <li>Apply tourniquet, ice, or water</li>
          <li>
            Give the person alcohol or caffeinated drinks or any other
            medications
          </li>
        </ul>
        <b>3. Follow Up</b> <br />
        If you treat the bite at home:
        <ul>
          <li>
            Contact a healthcare provider. The person may need a tetanus shot.
            Tetanus boosters should be given every 10 years.
          </li>
          <br />
          <b>
            At the hospital, treatment will depend on the type of snake:
          </b>{" "}
          <br />
          <li>
            If the snake was venomous, the person will be given anti-venom
            treatment.
          </li>
          <li>
            A tetanus shot may be given, depending on the date of the last
            injection.
          </li>
        </ul>
        <br />
        <b>Reference : </b>
        <Link>https://www.webmd.com/first-aid/snakebite-treatment </Link>
      </p>
    </div>
  );
}
