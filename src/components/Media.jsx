import { useEffect, useRef } from "react";

const media = {
  recent: [
    {
      title: "Sore: A Wife From Future",
      poster:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/rpqkqiqv1nl9MbdnOLKLbqqkJSj.jpg",
    },
    {
      title: "SIR",
      poster:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/1xlh1jh9Lxz4OzusFKeljqoRxjL.jpg",
    },
    {
      title: "Train Dreams",
      poster:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/wfzYOVdafdbD1d3SxNqiBtV2Yhx.jpg",
    },
  ],
  fav: [
    {
      title: "Interstellar",
      poster:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "The Shawshank Redemption",
      poster:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    },
  ],

  watchlist: [
    {
      title: "Peddi",
      poster:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/AiBszxYkCeEMBcznz6x3HdGVLqc.jpg",
    },
  ],
};

const MovieRow = ({ title, list }) => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;
    const hasOverflow = cards.scrollWidth > cards.clientWidth;

    document.querySelector(".prev")?.classList.toggle("hidden", !hasOverflow);
    document.querySelector(".next")?.classList.toggle("hidden", !hasOverflow);
  }, [list]);

  const handlePrev = () => {
    const cards = cardsRef.current;
    if (cards) cards.scrollLeft -= 200; // Adjust scroll speed as needed
  };

  const handleNext = () => {
    const cards = cardsRef.current;
    if (cards) cards.scrollLeft += 200;
  };

  return (
    <div className="media-row" ref={cardsRef}>
      {/* <button onClick={handlePrev} className="scroll-btn prev">⬅️ Prev</button> */}
      <h3>{title}</h3>
      <div className="media-cards-wrapper">
        <div className="media-cards">
          {list.map((item, index) => (
            <div className="media-card" key={index}>
              <img src={item.poster} alt={item.title} loading="lazy" />
              <p title={item.title}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={handleNext} className="scroll-btn next">➡️ Next</button> */}
    </div>
  );
};

export const Media = () => (
  <>
    <div className="media-content">
      <h2 className="section-heading">Media Section</h2>
      <MovieRow title="Recently Watched" list={media.recent} />
      <MovieRow title="Favorites" list={media.fav} />
      <MovieRow title="Watch List" list={media.watchlist} />
    </div>
  </>
);
