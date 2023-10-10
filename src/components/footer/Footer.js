import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p> */}
        <p
          className={isDark ? "dark-mode footer-text" : "footer-text"}
          style={{fontSize: 12}}
        >
          {"Thanks to "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            developerFolio
          </a>{" "}
          for the theme
        </p>
        <p style={{color: "white", textAlign: "center"}}>v1.0.2</p>
      </div>
    </Fade>
  );
}
