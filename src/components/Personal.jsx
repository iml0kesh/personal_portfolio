import { Editing } from "./Editing";
import { Media } from "./Media";

export const Personal = () => {
  return (
    <>
      <div class="professional-content">
        <div class="section">
          <div class="professional-abtme-container">
            <h2 class="sub-heading">Life | Moments | Memories</h2>
            <p class="professional-aboutme">
              When I’m not working, you’ll find me watching films, editing
              videos, taking photos, or exploring new tech. I enjoy
              cinematography, creative projects, and traveling to new places
              whenever I get the chance. You’ll also find me on Twitter,
              scrolling memes, reading tech threads.
            </p>
          </div>
        </div>
        <Editing />
        <Media />
      </div>
    </>
  );
};
