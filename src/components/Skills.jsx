import React from "react";

export const Skills = () => {
  return (
    <>
      <div className="section">
        <h1 class="section-heading">Tech Stack</h1>
        <div class="skills-container">
          <div class="sub-sec">
            <h1>Languages and Databases</h1>
            <ul>
              <li>
                <img src="images/Skills/Java.png" alt="" />
                <p>Java</p>
              </li>
              <li>
                <img src="images/Skills/Javascript.png" alt="" />
                <p>JavaScript</p>
              </li>
              <li>
                <img src="images/Skills/Mongodb.png" alt="" />
                <p>MongoDB</p>
              </li>
            </ul>
          </div>
          <div class="sub-sec">
            <h1>Frameworks</h1>
            <ul>
              <li>
                <img src="images/Skills/React.png" alt="" />
                <p>React</p>
              </li>
              <li>
                <img src="images/Skills/Nodejs.png" alt="" />
                <p>Node JS</p>
              </li>
            </ul>
          </div>
          <div class="sub-sec">
            <h1>Tools</h1>
            <ul>
              <li>
                <img src="images/Skills/Figma.png" alt="" />
                <p>Figma</p>
              </li>

              <li>
                <img src="images/Skills/GIT.png" alt="" />
                <p>GIT</p>
              </li>
            </ul>
          </div>
          <div class="sub-sec">
            <h1>Cloud</h1>
            <ul>
              <li>
                <img src="images/Skills/AWS.png" alt="" />
                <p>AWS</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
