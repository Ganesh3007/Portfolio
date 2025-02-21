import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrGraphQl } from "react-icons/gr";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiNextdotjs, SiTypescript  } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="React JS">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node JS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongo DB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next JS">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GraphQL">
        <GrGraphQl />
      </Col>
    </Row>
  );
}

export default Techstack;
