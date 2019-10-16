import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const DevToComponent = props => {
  const AnimateComponentStyle = styled(Col)`
    font-size: 14px;
    background: palevioletred;
    box-shadow: inset 0 0 0 2000px rgba(219, 112, 147, 0.9);
    box-shadow: 3px 3px 5px 6px rgba(219, 112, 147, 0.3);
    color: white;
    text-decoration: none;
    flex-basis: 15%;
    margin-right: 1%;
    box-sizing: border-box;
    margin-bottom: 10px;

    @media (max-width: 1192px) {
      flex-basis: 28%;
      box-sizing: border-box;
    }

    @media (max-width: 995px) {
      flex-basis: 40%;
      a {
        font-size: 10px;
      }
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 17px;
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
        <a href={props.data.url}>{props.data.title}</a>
      </p>

      <h6 className="starCount">
        {props.data.positive_reactions_count > 0 ? (
          <span className="fa fa-star checked">
            {props.data.positive_reactions_count}
          </span>
        ) : (
          <span className="fa fa-star noChecked">0</span>
        )}
      </h6>
    </AnimateComponentStyle>
  );
};

export default DevToComponent;
