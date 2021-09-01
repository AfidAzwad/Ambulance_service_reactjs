import React from "react";
import "./style.css";
import { Link } from "react-scroll";
import Services from "./services";
import Firstaid from "./firstaid";
import About from "./about";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import FooterPage from "./footer.js";

export default function Home() {
  return (
    <div id="home">
      <Navbar
        collapseOnSelect="true"
        fixed="top"
        expand="sm"
        className="navigation pt-0 pb-0"
      >
        <img class="img-fluid" alt="logo" src={logo} />
        <b
          style={{ fontFamily: "Arial", fontSize: "22px", marginRight: "auto" }}
        >
          Ambulance Service
        </b>
        <Navbar.Toggle
          style={{ marginRight: "10px" }}
          arial-controls="responsive-navbar-nav"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="px-5" style={{ marginLeft: "auto" }}>
            <Nav.Link>
              <Link
                to="home"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="service"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                {" "}
                Services{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="firstaid"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                {" "}
                First Aid{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="about"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                About us{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="contact"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                {" "}
                Contact{" "}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div class="abc">
        <a
          class="bookbutton"
          style={{ cursor: "pointer" }}
          href="tel:+8801857528424"
        >
          Book Now
        </a>
      </div>

      <div>
        <Services />
        <Firstaid />
        <About />
        <FooterPage />
      </div>
    </div>
  );
}
