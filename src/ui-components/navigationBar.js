import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const NavigationBar = () => {
  const Styles = styled.div`
    padding-left: 10px;

    .navbar {
      margin-top: 10px;
    }

    .nav-link {
      color: rgb(69, 72, 92);
    }

    .nav-link:hover {
      background: rgb(69, 72, 92);
      color: white;
    }

    .menu {
      justify-content: flex-end;
    }

    .fa {
      font-size: 20px;
      width: 50px;
      text-align: center;
      text-decoration: none;
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

    @media (max-width: 994px) {
      .socialIcon {
        display: none;
      }
    }

    @media (max-width: 770px) {
      .menu1 {
        display: none;
      }
      .socialIcon {
        display: block;
        justify-content: flex-start;
      }
    }

    @media (max-width: 582px) {
      .socialIcon {
        display: none;
      }
    }
  `;

  return (
    <Styles>
      <Nav className="menu">
        <Nav.Item className="menu1">
          <Nav.Link href="#">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="menu1">
          <Nav.Link href="https://github.com/vinodchauhan7">GitHub</Nav.Link>
        </Nav.Item>
        <Nav.Item className="menu1">
          <Nav.Link href="https://dev.to/vinodchauhan7">Articles</Nav.Link>
        </Nav.Item>
        <Nav.Item className="menu1">
          <Nav.Link href="#">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item className="socialIcon">
          <Nav.Link
            href="https://www.facebook.com/VINODCHAUHAN786"
            className="fa fa-facebook "
          ></Nav.Link>
        </Nav.Item>
        <Nav.Item className="socialIcon">
          <Nav.Link
            href="https://twitter.com/vinodc45"
            className="fa fa-twitter "
          ></Nav.Link>
        </Nav.Item>
        <Nav.Item className="socialIcon">
          <Nav.Link
            href="https://www.linkedin.com/in/vinod-chauhan7/"
            className="fa fa-linkedin "
          ></Nav.Link>
        </Nav.Item>
        <Nav.Item className="socialIcon">
          <Nav.Link href="#" className="fa fa-youtube "></Nav.Link>
        </Nav.Item>
      </Nav>
    </Styles>
  );
};

export default NavigationBar;
