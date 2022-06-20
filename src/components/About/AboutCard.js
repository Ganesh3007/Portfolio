import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Experienced professional with Capability to develop reusable
            components, interactive{" "}
            <span className="purple">web applications </span> and{" "}
            <span className="purple">native applications </span> to boost
            customer engagement and optimising application performance. Sound
            knowledge in React.js, React Native, Node.js, Redux, Apollo client
            and GraphQL. Good experience in{" "}
            <span className="purple">Automation </span> with Python and Django
            to ease <span className="purple">IT Operations</span>.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code can't lie but comments can !"{" "}
          </p>
          <footer className="blockquote-footer">Ganesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
