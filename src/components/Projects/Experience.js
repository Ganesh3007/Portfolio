import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { experienceData } from "../../Data/ProjectData";

const styles = {
  ulStyle: {
    listStylePosition: "outside",
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: "inline-block",
  },
  inlineChild: {
    display: "inline-block",
  },
  itemStyle: {
    marginBottom: 10,
  },
};

function Experience() {
  return (
    <>
      {experienceData && (
        <div className="section-content-container">
          <Container>
            <Timeline lineColor="grey">
              {experienceData.map((item) => (
                <TimelineItem
                  key={item.title + item.dateText}
                  dateText={item.dateText}
                  dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
                  style={styles.itemStyle}
                  bodyContainerStyle={{
                    background: "#100d18",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h2 className="purple">{item.title}</h2>
                  <div style={styles.subtitleContainerStyle}>
                    <h4 style={{ ...styles.subtitleStyle, color: "white" }}>
                      {item.subtitle}
                    </h4>
                    {item.workType && (
                      <h5 style={{ ...styles.inlineChild, color: "white" }}>
                        &nbsp;· {item.workType}
                      </h5>
                    )}
                  </div>
                  <ul style={{ ...styles.ulStyle, color: "white" }}>
                    {item.workDescription.map((point) => (
                      <div key={point}>
                        <li>
                          <ReactMarkdown
                            children={point}
                            components={{
                              p: "span",
                            }}
                          />
                        </li>
                        <br />
                      </div>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </Timeline>
          </Container>
        </div>
      )}
    </>
  );
}

export default Experience;
