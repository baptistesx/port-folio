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
      <h4>🚀 I am currently open for 👇</h4>
      {showFullContent ? (
        <>
          <p>
            &#x2022; A full-time Mobile Apps Lead Developer position in Barcelona,
            Spain🇪🇸
            <br />
            &#x2022; Full-time or part-time freelance missions
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
