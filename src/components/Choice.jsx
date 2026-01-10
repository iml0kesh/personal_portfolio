import React from "react";

export const Choice = () => {
  return (
    <>
      <div class="section">
        <h1 class="section-heading">About Me</h1>

        <div class="choice-container">
          <img
            src="images/Assets/pill.png"
            alt="Morpheus with hands extended"
            class="morpheus-img"
          />

          <button
            id="pillBlue"
            class="pill-button professional"
            onclick="showContent('professional')"
          >
            Professional
          </button>
          <button
            id="pillRed"
            class="pill-button personal"
            onclick="showContent('personal')"
          >
            Personal
          </button>
        </div>
      </div>
    </>
  );
};
