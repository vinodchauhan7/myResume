import React from "react";
import styled from "styled-components";

const TopSideBar1 = props => {
  const Styles = styled.div`
    height: 180px;
    background: rgb(69, 72, 92);
    margin: 40px 0 0 0;
    display: flex;
    padding: 0 !important;

    .center-me {
      color: #fff;
      font-size: 14px;
      margin: auto;
    }
  `;

  const SpanStyle = styled.span`
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotate(180deg) translateX(-90%);

    &::after,
    &::before {
      content: "\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0";
      text-decoration: line-through;
    }

    @media (max-width: 800px) {
      writing-mode: horizontal-tb;
      transform: translate(0%);
      text-orientation: initial;
      &::after,
      &::before {
        content: "\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0";
        text-decoration: line-through;
      }
    }
  `;

  return (
    <Styles>
      <div className="center-me">
        <SpanStyle>Profile Picture</SpanStyle>
      </div>
    </Styles>
  );
};

export default TopSideBar1;
