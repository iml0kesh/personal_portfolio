import React from "react";

export const Projects = () => {
  return (
    <>
      <div class="section">
        <h2 class="section-heading">Projects</h2>
        <div class="pro-container">
          <div class="box-card">
            <img src="images/Projects/ShareYourNotes.png" alt="" />
            <p class="pro-title">Share Your Notes</p>
            <p class="pro-info">
              Developed a full-stack web application using the MERN stack. Users
              can view, create, modify, and remove notes. To ensure secure
              access, we included user authentication and authorization
              mechanisms. MongoDB was used for database storage, with Express JS
              serving as the backend API. created the frontend using React.
            </p>
            <div class="pro-footer">
              <a href="">Github</a>
              <p>2023</p>
            </div>
          </div>
          <div class="box-card">
            <img src="images/Projects/paintBox.png" alt="" />
            <p class="pro-title">Paint The Card</p>
            <p class="pro-info">
              Created a web-based game with HTML, CSS, and JavaScript. The user
              can select a color from the available options and paint the cards
              as desired and Implemented a feature that allows the cards to be
              colored randomly with a single click. Pushed to Github and
              Deployed using Github Pages
            </p>
            <div class="pro-footer">
              <a href="">Github</a>
              <p>2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
