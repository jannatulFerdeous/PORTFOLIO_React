import React, { useEffect, useState } from "react";
import { Tab, Container, Row, Col } from "react-bootstrap";
import "./Project.Module.css";
import "./About.Module.css";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";

export const Project = () => {
    const [projects,setProjects]=useState([]);
 

    useEffect(() => {
        fetch("/FakeData/project.json")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);



  return (
    <section className="project" id="Portfolio">
      <div className="about-title">
        <span>P</span>
        <span>R</span>
        <span>O</span>
        <span>J</span>
        <span>E</span>
        <span>C</span>
        <span>T</span>
        <span>S</span>
      </div>
      <Container>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis labore, libero exercitationem in asperiores dolore
              accusantium aut neque laboriosam obcaecati quis numquam totam esse
              sit odit. Repudiandae consequatur maxime eveniet.
            </p>
            <Tab.Container defaultActiveKey={"first"}>
              <Nav variant="pills" >
                <Nav.Item >
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="project-card">
                <Tab.Pane eventKey="first" >
                  <Row>

                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}

                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum </Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
     
    </section>
  );
};
