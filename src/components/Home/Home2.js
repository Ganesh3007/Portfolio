import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {
                <Container className="border">
                  <br />
                  <br />
                  <span>{"const profile = {"}</span>
                  <br />
                  <span className="purple">whoIAm</span>: "A creative and
                  detailed individual with ability to develop effective
                  solutions and deliver quality work.",
                  <br />
                  <span className="purple">whatICanDo</span>: "Develop rich & highly accessible user interfaces",
                  <br />
                  <span className="purple">interest</span>:"Interested in
                  Application development and Automation"
                  <br />
                  <span> {"}"}</span>
                  <br />
                  <br />
                  <span>{"const Profile = (props)=>{"}</span>
                  <br />
                  <span className="purple">{"return("}</span>
                  <br />
                  <div style={{marginLeft:"20px"}}>
                  <span>{"<div>"}</span>,
                  <br />
                  <span style={{marginLeft:"20px"}}>{"<ul>"}</span>
                  <br />
                  <span style={{marginLeft:"40px"}}>{"<li>Who I Am: {props.whoIAm}</li>"}</span>
                  <br />
                  <span style={{marginLeft:"40px"}}>{"<li>What I Can Do: {props.whatICanDo}</li>"}</span>
                  <br />
                  <span style={{marginLeft:"40px"}}>{"<li>Interests: {props.interest}</li>"}</span>
                  <br />
                  <span style={{marginLeft:"20px"}}>{"</ul>"}</span>
                  <br />
                  <span>{"</div>"}</span>,
                  <br />
                  </div>
                  <span className="purple"> {");"}</span>
                  <br />
                  <span>{"}"}</span>
                </Container>
              }
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ganesh3007"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ganesh-prabhu-884261130/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:msdprabu8@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
