// Css Toogle
const impDiv = document.querySelector("#imp");
const btn = document.querySelector("#imp-btn");

btn.addEventListener("click", () => {
  impDiv.classList.add("hide");
});

let count = localStorage.getItem("visitCount") || 0;
const Vcount = document.querySelector(".v-num");

// Fade
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    count++;
    localStorage.setItem("visitCount", count);
    document.querySelector(".fade-in").classList.add("active");
    Vcount.innerHTML = count;
  }, 100); // 100ms delay
});

// Certifications

// Certifications

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
    info: "hello 3",
    learning: [
      "AWS VPC: I gained knowledge in designing and implementing AWS Virtual Private Cloud",
      "AWS Lambda: I learned serverless compute service for running code without provisioning or managing servers",
    ],
    img: "images/Certificates/AWSSAA.png",
  },
  {
    title: "Red Hat Certified Engineer",
    info: "hello",
    learning: [
      "Linux Administration: I gained skills in Linux system administration",
      "Red Hat Enterprise Linux: I learned about Red Hat's enterprise Linux operating system",
      "Shell Scripting: I learned to automate tasks using shell scripts",
    ],
    img: "images/Certificates/Redhat.png",
  },
];

const certTitle = document.querySelector(".cert-title");
const certInfo = document.querySelector(".cert-info");
const certImg = document.querySelector("#cert-img");
const keyList = document.querySelector(".key-learning-list");

const prevCert = document.querySelector("#prevC");
const nextCert = document.querySelector("#nextC");

let num = 0;

function displayCert() {
  certTitle.innerHTML = certs[num].title;
  certInfo.innerHTML = certs[num].info;
  certImg.src = certs[num].img;

  keyList.innerHTML = "";

  certs[num].learning.forEach((learning) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = learning;
    keyList.appendChild(listItem);
  });
}

nextCert.addEventListener("click", () => {
  if (num < certs.length - 1) {
    num++;
    displayCert();
  } else {
    alert("You have reached my final Certificate");
  }
});

prevCert.addEventListener("click", () => {
  if (num > 0) {
    num--;
    displayCert();
  }
});

displayCert();
