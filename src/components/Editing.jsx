import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Editing.css";

export const Editing = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const videos = [
    "GSyi7ze4EW0?si=-2MmdACJeIk6Qz4Y",
    "GSyi7ze4EW0?si=-2MmdACJeIk6Qz4Y",
    "GSyi7ze4EW0?si=-2MmdACJeIk6Qz4Y",
  ];

  const photos = [
    "images/EditingPhotos/e1.JPG",
    "https://images.unsplash.com/photo-1492691523567-61723c275df1?q=80&w=1000",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1000",
  ];

  const changeVideo = (newIndex) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(newIndex);
  };

  // RESTORED: Cinematic Wipe Animations
  const videoVariants = {
    enter: (direction) => ({
      clipPath: direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
      scale: 1.2,
      opacity: 0,
    }),
    center: {
      clipPath: "inset(0 0 0 0%)",
      scale: 1,
      opacity: 1,
      transition: {
        clipPath: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
        scale: { duration: 0.9, ease: "easeOut" },
      },
    },
    exit: (direction) => ({
      clipPath: direction < 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
    }),
  };

  return (
    <section className="editing-playground">
      <div className="section-title">
        <h2>🎬 MOTION EDITS</h2>
      </div>

      <div className="video-viewport">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={videoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="video-layer"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videos[current]}?autoplay=1&mute=1&modestbranding=1`}
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
        <h2>📸 STATIC EDITS</h2>
      </div>

      <div className="photo-strip">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            className="strip-item"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <img src={src} alt={`Edit ${index}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
