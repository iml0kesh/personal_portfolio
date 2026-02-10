import React from "react";
import { Skills } from "./Skills";
import { Certifications } from "./Certifications";
import { Projects } from "./Projects";

export const Professional = () => {
  return (
    <>
      <div class="professional-content">
        <div class="section">
          <div class="professional-abtme-container">
            {/* <h1 class="section-heading" id="head-professional">
              Professional ME 👨‍💻
            </h1> */}
            <h2 class="sub-heading">Design | Code | Debug</h2>
            <p class="professional-aboutme">
              Hi, I’m a software engineer based in India. I enjoy building,
              shipping, and experimenting with web and cybersecurity projects.
              Most of my time goes into creating small apps, exploring new
              tools, and learning by doing. I like turning ideas into real
              products and improving them step by step.
            </p>
          </div>
        </div>
        
        <Projects />
        <Skills />
        <Certifications />
      </div>
    </>
  );
};
