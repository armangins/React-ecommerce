import React from "react";
import "./homepage.styles.scss";
import MainMenu from "../../main-menu/main-menu.component";
import { HomePageContainer } from "./home-page.styles";

const homePage = () => (
  <HomePageContainer>
    <MainMenu />
  </HomePageContainer>
);
export default homePage;
