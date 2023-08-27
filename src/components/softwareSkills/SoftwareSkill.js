import React from "react";
import {RiFlutterFill} from "react-icons/ri";
import {SiDart} from "react-icons/si";
import {skillsSection} from "../../portfolio";
import "./SoftwareSkill.scss";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i
                  className={
                    skills.skillName === "Flutter" ||
                    skills.skillName === "Dart"
                      ? ""
                      : skills.fontAwesomeClassname
                  }
                >
                  {skills.skillName === "Flutter" ? (
                    <RiFlutterFill />
                  ) : skills.skillName === "Dart" ? (
                    <SiDart />
                  ) : (
                    ""
                  )}
                </i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
