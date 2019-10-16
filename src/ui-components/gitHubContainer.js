import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import AnimatedComponent from "./../components/animatedComponent";
import { GitHubQuery } from "./../queries/queries";

const GitHubContainer = props => {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    GitHubQuery().then(data => {
      console.log(data.slice(3));
      setRepos(data.slice(0, 4));
    });
  }, []);

  const ColStyles = styled(Col)`
    margin: 0 !important;
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
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    color: white;
    background: rgb(69, 72, 92);
    background-image: url("https://avatars3.githubusercontent.com/u/24426837?v=4");
    box-shadow: inset 0 0 0 2000px rgba(69, 72, 92, 0.9);
    text-align: right;

    &:hover {
      background: rgb(69, 72, 92);
      box-shadow: 0 0 0 2000px rgba(69, 72, 92, 0.9);
    }

    &::after {
      content: "HUB";
      background: white;
      padding-left: 0px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 10px;
      color: rgb(69, 72, 92);
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
      text-align: center;
    }
  `;

  return (
    <React.Fragment>
      <Row>
        <ColStyles md={3}>
          <a href="https://github.com/vinodchauhan7">
            {" "}
            <GitHubHead>GIT</GitHubHead>
          </a>
        </ColStyles>
        <ColStyles>
          <Row className="displayRepos">
            {repos
              ? repos.map(repo => {
                  return <AnimatedComponent key={repo.id} data={repo} />;
                })
              : ""}
          </Row>
        </ColStyles>
      </Row>
    </React.Fragment>
  );
};

export default GitHubContainer;
