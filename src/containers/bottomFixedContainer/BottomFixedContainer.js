import {useEffect, useState} from "react";
import "./BottomFixedContainer.scss";

export default function BottomFixedContainer(props) {
  const [classes, setClasses] = useState("bottom-fixed-container delayed hide");
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClasses("bottom-fixed-container delayed");
    }, props.waitBeforeShow);
    return () => clearTimeout(timer);
  }, []);

  const toggleContent = () => setShowFullContent(!showFullContent);

  return (
    <div class={classes} onClick={toggleContent}>
      <h4>🚀 I'm currently open for 👇</h4>
      {showFullContent ? (
        <ul>
          <li>a full time position as Sr Mobile Developer in Barcelona 🇪🇸</li>
          <li>full time or part time missions as freelance</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
