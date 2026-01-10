import React, { useState, useRef } from "react";
import { Professional } from "./Professional";

export const Choice = () => {
  const [imgSrc, setImgSrc] = useState("images/Assets/pill.png");
  const [activeSection, setActiveSection] = useState(null);

  const profRef = useRef(null);
  const persRef = useRef(null);

  const handleButtonClick = (section) => {
    setActiveSection(section);
    if (section === "professional") {
      setImgSrc("images/Assets/pillBlue.png");
      profRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setImgSrc("images/Assets/pillRed.png");
      persRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="section">
      <h1 className="section-heading">About Me</h1>

      <div className="choice-container">
        <img src={imgSrc} alt="Morpheus" className="morpheus-img" />

        <button
          className="pill-button professional"
          onMouseOver={() => setImgSrc("images/Assets/pillBlue.png")}
          onMouseOut={() =>
            !activeSection && setImgSrc("images/Assets/pill.png")
          }
          onClick={() => handleButtonClick("professional")}
        >
          Professional
        </button>

        <button
          className="pill-button personal"
          onMouseOver={() => setImgSrc("images/Assets/pillRed.png")}
          onMouseOut={() =>
            !activeSection && setImgSrc("images/Assets/pill.png")
          }
          onClick={() => handleButtonClick("personal")}
        >
          Personal
        </button>
      </div>

      <div
        ref={profRef}
        className={activeSection === "professional" ? "" : "hidden"}
      >
        <Professional />
      </div>

      <div
        ref={persRef}
        className={activeSection === "personal" ? "" : "hidden"}
      >
        <h2>Personal Content</h2>
      </div>
    </div>
  );
};
