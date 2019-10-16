import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import DevToComponent from "./../components/devToComponent";
import { DevToArticles } from "./../queries/queries";

const DevToContainer = props => {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    DevToArticles().then(data => {
      setArticles(data.slice(0, 4));
    });
  }, []);

  const ColStyles = styled(Col)`
    margin-top: 20px;
    padding: 0 !important;

    .displayRepos {
      margin-left: 4%;
      max-width: 90%;
    }

    a {
      text-decoration: none;
    }

    a:hover {
      cursor: pointer;
      text-decoration: none;
    }

    @media (max-width: 1206px) {
      .displayRepos {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
      }
    }

    @media (max-width: 995px) {
      .displayRepos {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
      }
    }
  `;

  const GitHubHead = styled.h1`
    display: block;
    font-size: 70px;
    padding-left: 7px;
    padding-top: 40px;
    padding-bottom: 40px;
    color: rgb(69,72,92);
    background: white
    border:2px solid rgb(69,72,92);
    box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.6);
    text-align: right;

    &::after {
      content: "TO";
      background: rgb(69, 72, 92);
      padding-left: 0px;
      padding-top: 30px;
      padding-bottom: 30px;
      border-right:5px solid rgba(255, 255, 255, 0.6);
      color: white;
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1198px) {
      font-size: 57px;
      &::after {
      }
    }

    @media (max-width: 993px) {
      font-size: 40px;
    }

    @media (max-width: 768px) {
        background: rgb(69, 72, 92);
        box-shadow: inset 0 0 0 2000px rgba(69,72,92, 0.9);
        background-image: url("https://avatars3.githubusercontent.com/u/24426837?v=4");
        color: white;
      text-align: center;
      &::after {
        color: rgb(69,72,92);
        background: white;
      }
    }
  `;

  return (
    <React.Fragment>
      <Row>
        <ColStyles>
          <Row className="displayRepos">
            {articles
              ? articles.map(repo => {
                  return <DevToComponent key={repo.id} data={repo} />;
                })
              : ""}
          </Row>
        </ColStyles>
        <ColStyles md={3}>
          <a href="https://dev.to/vinodchauhan7">
            {" "}
            <GitHubHead>DEV</GitHubHead>
          </a>
        </ColStyles>
      </Row>
    </React.Fragment>
  );
};

export default DevToContainer;
