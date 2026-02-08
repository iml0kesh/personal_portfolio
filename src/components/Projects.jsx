import { useState } from "react";

const projects = [
  {
    title: "Share Your Notes",
    img: "images/Projects/ShareYourNotes.png",
    description:
      "Developed a full-stack web application using the MERN stack. Users can view, create, modify, and remove notes. To ensure secure access, we included user authentication and authorization mechanisms. MongoDB was used for database storage, with Express JS serving as the backend API. created the frontend using React.",
    github: "https://github.com/iml0kesh/shareyournotes",
    year: "2023",
  },
  {
    title: "Paint The Card",
    img: "images/Projects/paintBox.png",
    description:
      "Created a web-based game with HTML, CSS, and JavaScript. The user can select a color from the available options and paint the cards as desired and Implemented a feature that allows the cards to be colored randomly with a single click. Pushed to Github and Deployed using Github Pages.",
    github: "https://github.com/iml0kesh/Paint_ColorSite",
    year: "2023",
  },
  {
    title: "",
    img: "",
    description: "",
    github: "",
    year: "",
  },
  {
    title: "Valentine Invite",
    img: "images/Projects/valentineInvite.png",
    description:
      'I vide coded an interactive Valentine’s invite using React. I built it so the card shakes and shows funny messages if someone tries to click "No" making the whole experience feel more alive. I handled the setup and deployed it live on Netlify! 🚀🌹',
    github: "https://github.com/iml0kesh/project-valentine",
    year: "2026",
  },
];

export const Projects = () => {
  const [index, setIndex] = useState(0);
  const visibleProjects = projects.slice(index, index + 2);

  const next = () => {
    if (index + 2 < projects.length) {
      setIndex(index + 2);
    }
  };

  const prev = () => {
    if (index - 2 >= 0) {
      setIndex(index - 2);
    }
  };

  return (
    <>
      <div class="section">
        <h2 class="section-heading">Projects</h2>
        <div class="pro-container">
          {visibleProjects.map((project) => (
            <div class="box-card">
              <img src={project.img} alt="" />
              <p class="pro-title">{project.title}</p>
              <p class="pro-info">{project.description}</p>
              <div class="pro-footer">
                <a href={project.github}>Github</a>
                <p>{project.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider">
          <button onClick={prev} disabled={index === 0}>
            ← Prev
          </button>
          <button onClick={next} disabled={index + 2 >= projects.length}>
            Next →
          </button>
        </div>
      </div>
    </>
  );
};
