import ColorThief from "colorthief";
import React, {createRef, useState} from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
          <h6>{cardInfo.place}</h6>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc1}
        </p>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc2}
        </p>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc3}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
        {cardInfo.recommendations === undefined ? (
          ""
        ) : (
          <>
            <p
              className={
                isDark
                  ? "subTitle experience-text-desc dark-mode-text"
                  : "subTitle experience-text-desc"
              }
            >
              <b>They recommend me: </b>
            </p>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <ul style={{margin: 0}}>
                {cardInfo.recommendations.map(e => (
                  <li key={e.link}>
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="appLink"
                      style={{textDecoration: "none"}}
                    >
                      {e.name} 👉 <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <br />{" "}
          </>
        )}

        {cardInfo.footer != null ? (
          <div className="certificate-card-footer">
            {cardInfo.footer.map((v, i) => {
              return (
                <span
                  key={i}
                  className={
                    isDark ? "dark-mode certificate-tag" : "certificate-tag"
                  }
                  style={{fontSize: 16}}
                  onClick={() => openUrlInNewTab(v.url, v.name)}
                >
                  {v.name}
                </span>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <br />

        {cardInfo.pdfTitle != null && cardInfo.pdfUrl != null ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15"
            }}
          >
            <iframe
              title={cardInfo.pdfTitle}
              src={cardInfo.pdfUrl}
              allow="fullscreen"
              allowFullScreen={true}
              width="270"
              // height="368"
              style={{border: 0}}
            ></iframe>
          </div>
        ) : (
          ""
        )}

        {cardInfo.videoTitle != null && cardInfo.videoUrl != null ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15"
            }}
          >
            <iframe
              width="270"
              // height="637"
              src={cardInfo.videoUrl}
              title={cardInfo.videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
