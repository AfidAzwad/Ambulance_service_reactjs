import React from "react";
import "./style.css";
import elec from "../images/elec.jpg";
import { Figure } from "react-bootstrap";

export default function Electric() {
  return (
    <div id="elec" style={{ background: "ash" }}>
      <div class="header">Electric Shock</div>

      <div class="infopage">
        <Figure>
          <Figure.Image width={400} height={240} alt="image" src={elec} />
        </Figure>
      </div>

      <p class="aboutpara">
        The danger from an electrical shock depends on the type of current, how
        high the voltage is, how the current traveled through the body, the
        person's overall health and how quickly the person is treated. An
        electrical shock may cause burns, or it may leave no visible mark on the
        skin. In either case, an electrical current passing through the body can
        cause internal damage, cardiac arrest or other injury. Under certain
        circumstances, even a small amount of electricity can be fatal.
        <br />
        <br />
        <b>
          Take these actions immediately while waiting for medical help:
        </b>{" "}
        <br />
        Turn off the source of electricity, if possible. If not, move the source
        away from you and the person, using a dry, nonconducting object made of
        cardboard, plastic or wood. Begin CPR if the person shows no signs of
        circulation, such as breathing, coughing or movement. Try to prevent the
        injured person from becoming chilled. Apply a bandage.Cover any burned
        areas with a sterile gauze bandage, if available, or a clean cloth.
        Don't use a blanket or towel, because loose fibers can stick to the
        burns.
      </p>
    </div>
  );
}
