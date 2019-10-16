import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const SignatureContainer = () => {
  const Styles = styled(Container)`
    color: white;
    border-left: 1px solid white;
    margin-top: 40px;
    font-family: Montserrat;
  `;

  return (
    <Styles>
      <h2>VINOD</h2>
      <p>
        email : vinodc45@gmail.com <br />
        Mobile : +91-7814197986
      </p>
    </Styles>
  );
};

export default SignatureContainer;
