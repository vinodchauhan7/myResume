import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const LinkedInComponent = () => {
  const BorderDiv = styled(Col)`
     {
      flex: 2;
    }

    @media (max-width: 810px) {
      display: none;
    }
  `;

  const SquareBox = styled.div`
    content: "LinkedIn";
    color: white;
    height: 75px;
    width: 100%;
    font-size: 40px;
    background: rgb(69, 72, 92);
    background-image: url("https://avatars3.githubusercontent.com/u/24426837?v=4");
    box-shadow: inset 0 0 0 2000px rgba(69, 72, 92, 0.9);
    position: relative;

    &:hover {
      background: rgb(69, 72, 92);
      box-shadow: 0 0 0 2000px rgba(69, 72, 92, 0.9);
    }

    a {
      text-decoration: none;
      color: white;
    }

    a:hover {
      cursor: pointer;
      color: white;
      text-decoration: none;
    }
  `;

  const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 38px solid transparent;
    border-bottom: 38px solid transparent; /* 40px height (20+20) */
    border-left: 38px solid rgb(69, 72, 92);
    position: absolute;
    right: -55px;
  `;

  const LinkedStyle = styled(Col)`
     {
      flex: 1;
      flex-wrap: nowrap;
    }
    float: right;
    align: right;
    text-align: right;
    margin-bottom: 10px;
    font-size: 40px;
    &::before {
      content: "";
      border: 10px solid #007bb5;
    }

    a {
      text-decoration: none;
      color: rgb(69, 72, 92);
    }

    a:hover {
      text-decoration: none;
      color: rgb(69, 72, 92);
    }

    text:nth-child(1) {
      padding-right: 10px;
    }

    text:nth-child(2) {
      padding-left: 10px;
    }

    span {
      padding-right: 10px;
    }

    .fa {
      font-size: 40px;
      text-align: center;
      text-decoration: none;

      background: #007bb5;
      color: white;
      padding: 20px;
    }
  `;

  return (
    <Row>
      <BorderDiv>
        <SquareBox>
          &nbsp;&nbsp;
          <a href="http://becauseitsonelife.com/">
            BecauseItsOneLife.com' Blog
          </a>
        </SquareBox>
      </BorderDiv>
      <LinkedStyle>
        <a href="https://www.linkedin.com/in/vinod-chauhan7/">
          <text>My</text>
          <span className="fa fa-linkedin"></span>
          <text>Profile</text>
        </a>
      </LinkedStyle>
    </Row>
  );
};

export default LinkedInComponent;
