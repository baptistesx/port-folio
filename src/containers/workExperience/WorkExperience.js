import React, {useContext} from "react";
import {Fade} from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import StyleContext from "../../contexts/StyleContext";
import "./WorkExperience.scss";

export default function WorkExperience({experiences}) {
  const {isDark} = useContext(StyleContext);
  if (experiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">{experiences.title}</h1>
              <p
                className={
                  isDark
                    ? "dark-mode project-subtitle"
                    : "subTitle project-subtitle"
                }
              >
                {experiences.subtitle}
              </p>
              <div className="experience-cards-div">
                {experiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        place: card.place,
                        desc1: card.desc1,
                        desc2: card.desc2,
                        desc3: card.desc3,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        recommendations: card.recommendations,
                        pdfTitle: card.pdfTitle,
                        pdfUrl: card.pdfUrl,
                        videoTitle: card.videoTitle,
                        videoUrl: card.videoUrl,
                        footer: card.footerLink
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
