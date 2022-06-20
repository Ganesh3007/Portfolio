import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Experience from "./Experience";
import { projectsData } from "../../Data/ProjectData";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData?.map((project) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project?.imgPath}
                  title={project?.title}
                  description={project?.description}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My<strong className="purple"> Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a companies in the career path.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Experience />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
