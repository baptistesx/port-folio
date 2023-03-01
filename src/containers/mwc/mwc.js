import emoji from "react-easy-emoji";
import "./mwc.scss";

export default function ThankContainer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // height: "400px",
        margin: "auto",
        maxWidth: "800px"
      }}
    >
      <h2>Welcome to the MWC!</h2>
      <h3 style={{textAlign: "center", lineHeight: "30px"}}>
        Are you in search of a <b>Mobile Apps Engineer</b> to take your team's
        innovation to the next level?🚀
      </h3>
      <p style={{textAlign: "center"}}>
        As a highly skilled Mobile Apps Engineer, I am excited to connect with
        you. Although I couldn't affort the event, I am sharing my{" "}
        <b>portfolio, resume, and LinkedIn</b> link with you via Airdrop.📱
      </p>
      <p style={{textAlign: "center"}}>
        Don't hesitate to contact me for any questions or to discuss how I can
        add value to your team. And if you know of anyone who might be
        interested in my skills, I'd be grateful for any referrals.
      </p>
      <p style={{textAlign: "center"}}>
        <b>Thank you</b> for considering me for this exciting opportunity. I
        look forward to hearing from you and taking the first step toward a
        successful partnership!🙏
      </p>

      <span className="wave-emoji">{emoji("👇")}</span>
    </div>
  );
}
