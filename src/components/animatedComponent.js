import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const AnimatedComponent = props => {
  const AnimateComponentStyle = styled(Col)`
    font-size: 14px;
    background: palevioletred;
    box-shadow: inset 0 0 0 2000px rgba(219, 112, 147, 0.9);
    box-shadow: 3px 3px 5px 6px rgba(219, 112, 147, 0.3);
    color: white;
    text-decoration: none;
    flex-basis: 15%;
    margin-right: 2%;
    box-sizing: border-box;
    margin-bottom: 10px;

    @media (max-width: 1192px) {
      flex-basis: 28%;
      box-sizing: border-box;
    }

    @media (max-width: 995px) {
      flex-basis: 46%;
    }

    a {
      text-decoration: none;
      color: white;
    }

    a:hover {
      cursor: pointer;
      text-decoration: none;
      color: white;
    }

    &:hover {
    }

    .noChecked {
      color: rgb(69, 72, 92);
    }

    .noChecked,
    .checked {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .starsCount {
      position: relative;
    }
  `;

  return (
    <AnimateComponentStyle>
      <p>
        <a href={props.data.owner ? props.data.owner.html_url : ""}>
          {props.data.name ? props.data.name.toUpperCase() : ""}
        </a>
      </p>
      <p>{props.data.description}</p>
      <h6 className="starCount">
        {props.data.stargazers_count > 0 ? (
          <span className="fa fa-star checked">
            {props.data.stargazers_count}
          </span>
        ) : (
          <span className="fa fa-star noChecked">0</span>
        )}
      </h6>
    </AnimateComponentStyle>
  );
};

export default AnimatedComponent;
