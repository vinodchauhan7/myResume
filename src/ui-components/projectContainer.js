import React from "react";
import styled from "styled-components";
import { Row, Col, Card } from "react-bootstrap";

const ProjectList = [
  {
    title: "Cisco Nock Automation (NSO)",
    description:
      "NSO delivers high-quality services faster and more easily through network automation.",
    technology:
      "NSO,ReactJS, React-Hooks, DJango, Yang, React-BootStrap, Mpls-L2-Layer & more.",
    role:
      "Being a full-stack developer on client location, I have worked on both provisioning & reconciling part of Airtel network of L2 layer."
  },
  {
    title: "Cisco Stadium Vision",
    description:
      "Cisco Vision Dynamic Signage (Cisco Vision) is an end to end dynamic signage solution that enables business to communicate and engage with customers and employees - in new and more impactful ways",
    technology:
      "ReactJS, NodeJS, bootstrap, Html5,CSS3, JS ,Ionic Framework 3,JWT",
    role:
      "I have developed whole architecture,requirements gathering & coding for this particular project. Also give demo to client what we have done so for on regular intervals. In addition also done testing for all developed features and bug fixing."
  },
  {
    title: "Cisco Secure Ops",
    description:
      "A cisco project, consists of Data Collector Service & compliance monitoring system that uses IOT to interact with real devices to get their data and run the monitoring over them using network protocols.",
    technology: "Angular 2/4,bootstrap, Html5,CSS3, JS, Java, Spring",
    role:
      "Developing rest api’s for hitting devices using Spring Boot. Architecting the frontend project and developing core components using Angular 4."
  },
  {
    title: "Cisco Extended Care",
    description:
      "Helps to improve the remote doctor-patient experience and better patient outcomes and satisfaction with collaboration platform.",
    technology: "Angular 1, JS, Java, Spring,MySql",
    role:
      "I have developed feature to handle online appointments and doctor , patient portal for smooth functioning of the intended purpose."
  }
];

const ProjectContainer = props => {
  const ColStyles = styled(Col)`
    margin: 0 !important;
    padding: 0 !important;

    a {
      text-decoration: none;
    }

    a:hover {
      cursor: pointer;
      text-decoration: none;
    }
  `;

  const ProjectColStyles = styled(Col)`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;

    a {
      text-decoration: none;
    }

    a:hover {
      cursor: pointer;
      text-decoration: none;
      color: white;
    }
  `;

  const ProjectHead = styled.h1`
    display: block;
    font-size: 52px;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    color: white;
    background: rgb(69, 72, 92);
    background-image: url("https://avatars3.githubusercontent.com/u/24426837?v=4");
    box-shadow: inset 0 0 0 2000px rgba(69, 72, 92, 0.9);
    text-align: right;

    &::after {
      content: "ECTS";
      background: white;
      padding-left: 0px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 10px;
      color: rgb(69, 72, 92);
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1198px) {
      font-size: 41px;
      &::after {
      }
    }

    @media (max-width: 993px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  `;

  const CardStyle = styled(Card)`
    margin-bottom: 10px;
    background: linear-gradient(
      180deg,
      rgb(69, 72, 92) 100%,
      rgb(90, 92, 100) 0%
    );
    color: white;

    &:hover {
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
      background: rgb(69, 72, 92);
      box-shadow: inset 0 0 0 2000px rgba(69, 72, 92, 0.9);
      color: white;
    }
  `;

  return (
    <>
      <Row>
        <ColStyles md={3}>
          <a href="https://github.com/vinodchauhan7">
            {" "}
            <ProjectHead>PROJ</ProjectHead>
          </a>
        </ColStyles>
        <ProjectColStyles>
          {ProjectList.map(project => {
            return (
              <CardStyle>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {project.description}
                  </Card.Subtitle>
                  <Card.Text>{project.role}</Card.Text>
                  <Card.Link href="#">{project.technology}</Card.Link>
                </Card.Body>
              </CardStyle>
            );
          })}
        </ProjectColStyles>
      </Row>
    </>
  );
};

export default ProjectContainer;
