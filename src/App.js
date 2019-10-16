import React from "react";
import { GlobalStyle } from "./ui-components/globalStyle";
import BaseContainer from "./ui-components/baseContainer";
import TopHeader from "./ui-components/topHeader";

import GitHubContainer from "./ui-components/gitHubContainer";
import LinkedInComponent from "./ui-components/LinkedInComponent";
import DevToContainer from "./ui-components/devToContainer";
import ExpertiseContainer from "./ui-components/expertiseContainer";
import ProjectContainer from "./ui-components/projectContainer";
import ExperienceContainer from "./ui-components/experienceContainer";
import FollowContainer from "./ui-components/followContainer";
import SignatureContainer from "./ui-components/signatureContainer";

//import 'bootstrap/dist/css/bootstrap.min.css'
//https://dev.to/api/articles?username=vinodchauhan7
//https://api.github.com/users/vinodchauhan7
/**
 * axios.get(`https://dev.to/api/articles?username=vinodchauhan7`).then(res => {
    const persons = res.data;
    console.log(JSON.stringify(persons, null, 2));
  });
 */
function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <BaseContainer>
        <TopHeader></TopHeader>
        <LinkedInComponent></LinkedInComponent>
        <GitHubContainer></GitHubContainer>
        <DevToContainer></DevToContainer>
        <ExpertiseContainer></ExpertiseContainer>
        <ProjectContainer></ProjectContainer>
        <ExperienceContainer></ExperienceContainer>
        <FollowContainer></FollowContainer>
      </BaseContainer>
      <SignatureContainer></SignatureContainer>
    </React.Fragment>
  );
}

export default App;
