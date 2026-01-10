import React from "react";

export const Certifications = () => {
  return (
    <>
      <div class="section">
        <h2 class="section-heading">Certifications</h2>
        <div class="cert-container">
          <div class="cert-left">
            <p class="cert-title">AWS Certified Cloud Practitioner</p>
            <p class="cert-info">
              I successfully completed the AWS Certified Cloud Practitioner
              certification during my summer break in 2022. This certification
              has equipped me with foundational knowledge of the AWS Cloud
              platform and its services.
            </p>
            <h4>Key Learnings:</h4>
            <ul class="key-learning-list"></ul>
            <div class="cert-nav">
              <button id="prevC">Prev</button>
              <button id="nextC">Next</button>
            </div>
          </div>
          <div class="cert-right">
            <img src="images/Certificates/AWSCP.png" alt="" id="cert-img" />
          </div>
        </div>
      </div>
    </>
  );
};
