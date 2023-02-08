import "./thank.scss";

export default function ThankContainer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        margin: "16px"
      }}
    >
      <p
        className="thankText"
        style={{
          // fontSize: "32px",
          maxWidth: "600px",
          textAlign: "center",
          lineHeight: "40px"
        }}
      >
        A huge thank to{" "}
        <b>
          <a
            href="https://www.linkedin.com/in/enguerrand-arminjon/"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: "none"}}
          >
            Enguerrand Arminjon
          </a>
        </b>
        , who mentored me on Flutter for almost 2 years.
      </p>
    </div>
  );
}
