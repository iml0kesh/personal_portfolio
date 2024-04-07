// Css Toogle
const impDiv = document.querySelector("#imp");
const btn = document.querySelector("#imp-btn");

btn.addEventListener("click", () => {
  impDiv.classList.add("hide");
});

// Certifications

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    info: "hello",
    img: "images/Certificates/AWSCP.png",
  },
  {
    title: "AWS Certified Solutions Architect",
    info: "hello 3",
    img: "images/Certificates/AWSSAA.png",
  },
  {
    title: "Red Hat Certified Engineer",
    info: "hello",
    img: "images/Certificates/Redhat.png",
  },
];

const certTitle = document.querySelector(".cert-title");
const certInfo = document.querySelector(".cert-info");
const certImg = document.querySelector("#cert-img");

const prevCert = document.querySelector("#prevC");
const nextCert = document.querySelector("#nextC");

let num = 0;

nextCert.addEventListener("click", () => {
  num++;
  certTitle.innerHTML = certs[num].title;
  certInfo.innerHTML = certs[num].info;
  certImg.src = certs[num].img;
});

prevCert.addEventListener("click", () => {
  if (num != 0) {
    num--;
    certTitle.innerHTML = certs[num].title;
    certInfo.innerHTML = certs[num].info;
    certImg.src = certs[num].img;
  }
});
