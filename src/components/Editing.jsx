import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Editing.css";

export const Editing = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [photoCurrent, setPhotoCurrent] = useState(0);

  const videos = [
    "GSyi7ze4EW0?si=-2MmdACJeIk6Qz4Y",
    "GSyi7ze4EW0?si=-2MmdACJeIk6Qz4Y",
    "GSyi7ze4EW0?si=-2MmdACJeIk6Qz4Y",
  ];

  const photos = [
    "images/EditingPhotos/e0.jpg",
    "images/EditingPhotos/e1.JPG",
    "images/EditingPhotos/e2.jpg",
    "images/EditingPhotos/e3.jpg",
  ];

  const changeVideo = (newIndex) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(newIndex);
  };

  const totalSlides = photos.length + 1;

  return (
    <section className="editing-playground">

      <div className="section-title">
        <h2>Video EDITS</h2>
      </div>

      <div className="video-viewport">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (d) => ({
                clipPath: d > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
                scale: 1.2,
              }),
              center: {
                clipPath: "inset(0 0 0 0%)",
                scale: 1,
                transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
              },
              exit: (d) => ({
                clipPath: d < 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
                scale: 0.9,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            className="video-layer"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videos[current]}?autoplay=1&mute=1`}
              title="Video"
              allowFullScreen
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="controls-bar">
        <button
          onClick={() => changeVideo(current - 1)}
          disabled={current === 0}
          className="nav-btn"
        >
          PREV
        </button>
        <div className="counter">
          {current + 1} / {videos.length}
        </div>
        <button
          onClick={() => changeVideo(current + 1)}
          disabled={current === videos.length - 1}
          className="nav-btn"
        >
          NEXT
        </button>
      </div>

      
      <div className="section-title" style={{ marginTop: "4rem" }}>
        <h2>Clicks</h2>
      </div>

      <div className="photo-slider-container">
        <motion.div
          className="photo-slider-track"
          animate={{ x: `-${photoCurrent * 100}%` }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        >
         
          {photos.map((src, index) => (
            <div key={index} className="photo-slide">
              <img src={src} alt={`Edit ${index}`} />
            </div>
          ))}

          
          <div className="photo-slide instagram-card">
            <div className="insta-content">
              <div className="insta-icon">📸</div>
              <h3>See more on Instagram</h3>
              <p>Check out my latest raw cuts and daily edits.</p>
              <a
                href="https://instagram.com/iaml0kesh"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-btn"
              >
                FOLLOW @iaml0kesh
              </a>
            </div>
          </div>
        </motion.div>

        <div className="photo-nav">
          <button
            onClick={() => setPhotoCurrent((p) => Math.max(0, p - 1))}
            className="round-btn"
            style={{ visibility: photoCurrent === 0 ? "hidden" : "visible" }}
          >
            ←
          </button>
          <button
            onClick={() =>
              setPhotoCurrent((p) => Math.min(totalSlides - 1, p + 1))
            }
            className="round-btn"
            style={{
              visibility:
                photoCurrent === totalSlides - 1 ? "hidden" : "visible",
            }}
          >
            →
          </button>
        </div>
      </div>

      <div className="dots-container">
        {[...Array(totalSlides)].map((_, i) => (
          <div
            key={i}
            className={`dot ${i === photoCurrent ? "active" : ""}`}
            onClick={() => setPhotoCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};
