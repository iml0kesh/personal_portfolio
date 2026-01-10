import React, { useState } from "react";

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    info: "I successfully completed the AWS Certified Cloud Practitioner certification during my summer break in 2022. This certification has equipped me with foundational knowledge of the AWS Cloud platform and its services.",
    learning: [
      "AWS EC2: I gained hands-on experience in launching and managing virtual servers using Amazon EC2 (Elastic Compute Cloud)",
      "AWS S3: I learned to use Amazon S3 for storing and retrieving data",
    ],
    img: "images/Certificates/AWSCP.png",
  },
  {
    title: "AWS Certified Solutions Architect",
    info: "I advanced my cloud skills by learning how to architect secure and robust applications on AWS.",
    learning: [
      "AWS VPC: I gained knowledge in designing and implementing AWS Virtual Private Cloud",
      "AWS Lambda: I learned serverless compute service for running code without provisioning or managing servers",
    ],
    img: "images/Certificates/AWSSAA.png",
  },
  {
    title: "Red Hat Certified Engineer",
    info: "Achieved certification in enterprise Linux automation and system administration.",
    learning: [
      "Linux Administration: I gained skills in Linux system administration",
      "Red Hat Enterprise Linux: I learned about Red Hat's enterprise Linux operating system",
      "Shell Scripting: I learned to automate tasks using shell scripts",
    ],
    img: "images/Certificates/Redhat.png",
  },
];

export const Certifications = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < certs.length - 1) {
      setIndex(index + 1);
    } else {
      alert("You have reached my final Certificate");
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const currentCert = certs[index];

  return (
    <div className="section">
      <h2 className="section-heading">Certifications</h2>
      <div className="cert-container">
        <div className="cert-left">
          <p className="cert-title">{currentCert.title}</p>
          <p className="cert-info">{currentCert.info}</p>

          <h4>Key Learnings:</h4>
          <ul className="key-learning-list">
            {currentCert.learning.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="cert-nav">
            <button onClick={handlePrev} disabled={index === 0}>
              Prev
            </button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>

        <div className="cert-right">
          <img src={currentCert.img} alt={currentCert.title} id="cert-img" />
        </div>
      </div>
    </div>
  );
};
