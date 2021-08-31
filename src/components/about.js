import { Carousel } from "react-bootstrap";
import React from "react";
import "./style.css";
import s1 from "../images/slide1.jpg";
import s2 from "../images/slide2.jpg";
import s3 from "../images/slide3.jpg";
import s4 from "../images/slide4.jpg";

function About() {
  return (
    <div id="about">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", padding: "40px" }}> About Us </h1>

        <Carousel
          fade
          style={{ zIndex: "-1" }}
          prevLabel=""
          nextLabel=""
          nextIcon=""
          prevIcon=""
        >
          <Carousel.Item interval={1600}>
            <img className="img-fluid" src={s1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1700}>
            <img className="img-fluid" src={s2} alt="2nd slide" />
          </Carousel.Item>

          <Carousel.Item interval={1700}>
            <img className="img-fluid" src={s3} alt="3rd slide" />
          </Carousel.Item>

          <Carousel.Item interval={1700}>
            <img className="img-fluid" src={s4} alt="4th slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <p class="aboutpara">
        First time in Bangladesh, We are introducing a convenient and simple
        emergency medical service platform. It is a location-based service that
        makes hiring an on-demand ambulance easy from mobile or desktop. With
        the tap of a button on smartphone device, hire an ambulance during
        emergency to pick up your critically ill patient and take him or her to
        the desired hospitals or clinics. Ambulance service helps saving lives.
        It aims to transform the health space by bringing transparency in the
        ecosystem and ensuring faster ambulance response time. Woadec Ltd
        maintains, develops and owns this platform.
      </p>
    </div>
  );
}

export default About;
