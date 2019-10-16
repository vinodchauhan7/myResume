import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import TopSideBar1 from "./topHeader_SideBar_1";
import styled from "styled-components";
import NavigationBar from "./navigationBar";
import IntroSection from "./topHeader_SideBar_Intro";

const TopHeader = props => {
  const ColStyles = styled(Col)`
    margin: 0 !important;
    padding: 0 !important;

    .introBox {
      display: none;
    }

    @media (max-width: 996px) {
      .introBox {
        display: block;
        margin-top: 36%;
        font-family: fantasy;
        color: white;
        background: rgb(69, 72, 92);
        float: left;
        writing-mode: vertical-rl;
        text-orientation: upright;
        font-size: 20px;
        padding: 0px 35px 10px 35px;
      }
    }

    @media (max-width: 800px) {
      &:nth-child(1) {
        display: none;
      }

      .introBox {
        margin-top: 80%;
        writing-mode: horizontal-tb;
        font-size: 30px;
        text-align: center;
        padding: 30px;
        text-orientation: initial;
      }
    }

    @media (max-width: 575px) {
      .introBox {
        margin-top: 2%;
        width: 100%;
      }
    }
  `;

  const ImageDivStyle = styled.div`
    &::after {
      content: "";
      background-color: rgb(69, 72, 92);
      position: absolute;
      width: 1px;
      height: 81%;
      top: 0px;
      right: -15%;
      display: block;
    }

    @media (max-width: 1196px) {
      &::after {
        right: -40%;
        height: 62%;
      }
    }

    @media (max-width: 996px) {
      &::after {
        right: -82%;
        height: 52%;
      }
    }

    @media (max-width: 770px) {
      &::after {
        display: none;
      }
    }

    @media (max-width: 572px) {
      &::after {
        display: none;
      }
    }
  `;

  const ImageSrc = styled(Image)`
    padding: 0 !important;
    width: 200px;
    height: 250px;

    @media (max-width: 417px) {
      width: 100%;
      height: 400px;
    }

    @media (max-width: 575px) {
      width: 100%;
      height: 400px;
    }
  `;

  return (
    <>
      <Row>
        <ColStyles md={1}>
          <TopSideBar1></TopSideBar1>
        </ColStyles>
        {/* Image Column */}
        <ColStyles md={2} sm={2} className="ImageContainer">
          <ImageDivStyle>
            <ImageSrc src="https://avatars3.githubusercontent.com/u/24426837?v=4" />
          </ImageDivStyle>
          <h1 className="introBox">&nbsp;Intro</h1>
        </ColStyles>
        {/** Details */}
        <ColStyles>
          <NavigationBar></NavigationBar>
          <IntroSection></IntroSection>
        </ColStyles>
      </Row>
    </>
  );
};

export default TopHeader;
