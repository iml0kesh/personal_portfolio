import React from "react";
import { Choice } from "./Choice";

export const Homepage = () => {
  return (
    <>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#fff3cd",
          border: "1px solid #ffc107",
          borderRadius: "4px",
          margin: "1rem",
        }}
      >
        <p style={{ margin: 0, color: "#856404" }}>
          <strong>⚠️ Notice:</strong> We're migrating this site from standard
          HTML to React in January 2026. Please expect some glitches and errors.
          Thank you for your patience!
        </p>
      </div>
      <div class="personalPort" id="container">
        <div class="Section01">
          <div class="right">
            <img src="./images/IMG_6543.JPG" alt="" class="img" />
          </div>
          <div class="left">
            <h1>Hello World</h1>
            <h2 class="name">I'm Lokesh Matta</h2>
            <div class="socials-nav">
              <p class="v-count">
                Visitor Count : &nbsp;<span class="v-num">69</span>
              </p>
              <a href="/Sections/Lokesh_Matta_Resume.html"> Resume </a>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/iaml0kesh/"
                    target="_blank"
                  >
                    <img
                      src="images/logos/Linkedin.png"
                      alt="Open Linkedin Profile"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/iaml0kesh" target="_blank">
                    <img src="images/logos/x.png" alt="Open X Profile" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/iaml0kesh/"
                    target="_blank"
                  >
                    <img
                      src="images/logos/instagram.png"
                      alt="Open Instagram Profile"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Choice />
    </>
  );
};
