const projects = [
  {
    title: "Share Your Notes",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse odio sequi provident quidem tenetur aliquid dolor fuga,consequuntur autem dolore dignissimos, quae quaerat ipsa sunt hicharum tempora, iste nesciunt?",
  },
  {
    title: "Share Your Notes",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse odio sequi provident quidem tenetur aliquid dolor fuga,consequuntur autem dolore dignissimos, quae quaerat ipsa sunt hicharum tempora, iste nesciunt?",
  },
  {
    title: "Share Your Notes",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse odio sequi provident quidem tenetur aliquid dolor fuga,consequuntur autem dolore dignissimos, quae quaerat ipsa sunt hicharum tempora, iste nesciunt?",
  },
];

const pro_container = document.querySelector(".pro-container");

const project = projects.map(
  (project) => `
    <div class="pro-card">
      <p class="pro-title">${project.title}</p>
      <p class="pro-info">${project.info}</p>
      <button>Github</button>
    </div>`
);

// pro_container.innerHTML = project;

// const outputs = document.querySelector("#out");

// Css Toogle
const impDiv = document.querySelector("#imp");
const btn = document.querySelector("#imp-btn");

btn.addEventListener("click", () => {
  impDiv.classList.add("hide");
});
