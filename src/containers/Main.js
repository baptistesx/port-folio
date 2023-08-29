import React, {useEffect, useState} from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {otherProjects, splashScreen, workExperiences} from "../portfolio";
import "./Main.scss";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import BottomFixedContainer from "./bottomFixedContainer/BottomFixedContainer";
import Education from "./education/Education";
import Greeting from "./greeting/Greeting";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import StackProgress from "./skillProgress/skillProgress";
import Skills from "./skills/Skills";
import SplashScreen from "./splashScreen/SplashScreen";
import ThankContainer from "./thank/thank";
import ScrollToTopButton from "./topbutton/Top";
import WorkExperience from "./workExperience/WorkExperience";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            {/* <MWCContainer /> */}
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience experiences={workExperiences} />
            <WorkExperience experiences={otherProjects} />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            {/* <Talks />
            <Twitter />
            <Podcast /> */}
            <ThankContainer />
            <Profile />
            <Footer />
            <ScrollToTopButton />
            <div style={{height: "130px"}}></div>
            <BottomFixedContainer waitBeforeShow={3500} />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
