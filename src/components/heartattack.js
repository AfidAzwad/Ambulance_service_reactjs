import React from "react";
import "./style.css";
import heart from "../images/heart.jpg";
import { Figure } from "react-bootstrap";

export default function Heartattack() {
  return (
    <div class="" id="heart" style={{ background: "ash" }}>
      <div class="header">Heart Attack</div>

      <div class="infopage">
        <Figure>
          <Figure.Image width={400} height={240} alt="image" src={heart} />
        </Figure>
      </div>
      <p class="aboutpara">
        Call 911 or emergency medical help if you think you might be having a
        heart attack. Someone having a heart attack may have any or all of the
        following: Chest pain, pressure or tightness, or a squeezing or aching
        sensation in the center of the chest Pain or discomfort that spreads to
        the shoulder, arm, back, neck, jaw, teeth or occasionally upper abdomen
        Nausea, indigestion, heartburn or abdominal pain Shortness of breath
        Lightheadedness, dizziness, fainting Sweating A heart attack generally
        causes chest pain for more than 15 minutes. Some people have mild chest
        pain, while others have more-severe pain. The discomfort is commonly
        described as a pressure or chest heaviness, although some people have no
        chest pain or pressure at all. Women tend to have more-vague symptoms,
        such as nausea or back or jaw pain. Some heart attacks strike suddenly,
        but many people have warning signs hours or days in advance.
        <br />
        <br />
        <b style={{ fontWeight: "bold" }}>
          ??What to do if you or someone else may be having a heart attack:
        </b>
        <br />
        <br />
        Call 911 or your local emergency number. Don't ignore the symptoms of a
        heart attack. If you can't get an ambulance or emergency vehicle to come
        to you, have a neighbor or a friend drive you to the nearest hospital.
        Drive yourself only if you have no other option. Because your condition
        can worsen, driving yourself puts you and others at risk. Chew and
        swallow an aspirin while waiting for emergency help. Aspirin helps keep
        your blood from clotting. When taken during a heart attack, it could
        reduce heart damage. Don't take aspirin if you are allergic to it or
        have been told by your doctor never to take aspirin. Take nitroglycerin,
        if prescribed. If you think you're having a heart attack and your doctor
        has previously prescribed nitroglycerin for you, take it as directed
        while waiting for emergency medical help. Begin CPR if the person is
        unconscious. If the person isn't breathing or you don't find a pulse,
        begin CPR to keep blood flowing after you call for emergency medical
        help. Push hard and fast on the center of the person's chest in a fairly
        rapid rhythm — about 100 to 120 compressions a minute. If an automated
        external defibrillator (AED) is immediately available and the person is
        unconscious, follow the device instructions for using it.
      </p>
    </div>
  );
}
