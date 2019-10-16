import React from "react";
import { Row, Col, Media } from "react-bootstrap";
import styled from "styled-components";
import AltranLogo from "./../images/AltranLogo.png";

const ExperienceContainer = props => {
  const RowStyles = styled.div`
    margin-top: 20px;
    display: flex;
  `;

  const ColStyles = styled.div`
    margin: auto;
    padding: 0 !important;

    h1 {
      font-size: 70px;
      color: rgb(69, 72, 92);
      font-family: Roboto;
    }

    .fa {
      font-size: 30px;
      width: 50px;
      text-align: center;
      text-decoration: none;
      padding: 15px;
      margin: 5px;
    }

    .fa-facebook {
      background: rgb(69, 72, 92);
      color: white;
    }

    .fa-google {
      background: rgb(69, 72, 92);
      color: white;
    }

    .fa-linkedin {
      background: rgb(69, 72, 92);
      color: white;
    }

    .fa-youtube1 {
      background: rgb(69, 72, 92);
      color: white;
    }
  `;

  const ColStyles1 = styled(Col)`
    margin-left: 10%;
    margin-top: 20px;
  `;

  return (
    <>
      <RowStyles>
        <ColStyles>
          <h1>FOLLOW</h1>
        </ColStyles>
      </RowStyles>
      <Row style={{ display: "flex", marginBottom: "20px" }}>
        <ColStyles>
          <span className="fa fa-facebook "></span>
          <span className="fa fa-angellist "></span>
          <span className="fa fa-linkedin "></span>
          <span className="fa fa-youtube "></span>
        </ColStyles>
      </Row>
    </>
  );
};

export default ExperienceContainer;
