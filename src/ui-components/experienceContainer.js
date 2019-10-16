import React from "react";
import { Row, Col, Media } from "react-bootstrap";
import styled from "styled-components";
import AltranLogo from "./../images/AltranLogo.png";

const ExperienceContainer = props => {
  const ColStyles = styled(Col)`
    margin-top: 20px;
    padding: 0 !important;
  `;

  const GitHubHead = styled.h1`
    display: block;
    font-size: 50px;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    color: white;
    background: rgb(69, 72, 92);
    background-image: url("https://avatars3.githubusercontent.com/u/24426837?v=4");
    box-shadow: inset 0 0 0 2000px rgba(69, 72, 92, 0.9);
    text-align: right;

    &:hover {
      background: rgb(69, 72, 92);
      box-shadow: 0 0 0 2000px rgba(69, 72, 92, 0.9);
    }

    &::after {
      content: "ENCE";
      background: white;
      padding-left: 0px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 10px;
      color: rgb(69, 72, 92);
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1198px) {
      font-size: 37px;
      &::after {
      }
    }

    @media (max-width: 993px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  `;

  const ColStyles1 = styled(Col)`
    margin-left: 7%;
    margin-top: 20px;
  `;

  return (
    <>
      <Row>
        <ColStyles md={3}>
          <GitHubHead>EXPERI</GitHubHead>
        </ColStyles>
        <ColStyles1>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src={AltranLogo}
              alt="Altran"
            />
            <Media.Body>
              <h3>Altran Technologies</h3>
              <h6>Senior Software Engineer</h6>
              <p>
                Mar 2015 - Present
                <br />
                Gurgaon, India <br />
                <strong>Total Exp : Around 5 years</strong>
              </p>
            </Media.Body>
          </Media>
        </ColStyles1>
      </Row>
    </>
  );
};

export default ExperienceContainer;
