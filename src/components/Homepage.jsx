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
          <strong>⚠️ Notice:</strong> I'm migrating this site from standard HTML
          to React in January 2026. Please expect some glitches and errors.
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
            <div class="info">

              <div className="socials-nav">
                <a
                  href="https://github.com/iml0kesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <img src="images/logos/github.png" alt="GitHub Logo" />
                  Github
                </a>

                <a
                  href="https://www.linkedin.com/in/iaml0kesh/"
                  target="_blank"
                  className="social-btn"
                >
                  <img src="images/logos/Linkedin.png" alt="Linkedin" />
                  Linkedin
                </a>

                <a
                  href="https://x.com/iaml0kesh"
                  target="_blank"
                  className="social-btn"
                >
                  <img src="images/logos/x.png" alt="Linkedin" />
                  Twitter
                </a>

                <a
                  href="https://instagram.com/iaml0kesh"
                  target="_blank"
                  className="social-btn"
                >
                  <img src="images/logos/instagram.png" alt="Instagram" />
                  Instagram
                </a>
              </div>

              {/* <p class="v-count">
                Visitor Count : &nbsp;<span class="v-num">69</span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <Choice />
    </>
  );
};
