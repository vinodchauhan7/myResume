import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const BaseContainer = props => {
  const Styles = styled(Container)`
    background: white;
    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
    min-height: 500px;
    margin-bottom: 20px;
    border-bottom: 25px solid rgba(69, 72, 92, 0.9);
  `;

  return <Styles>{props.children}</Styles>;
};

export default BaseContainer;
