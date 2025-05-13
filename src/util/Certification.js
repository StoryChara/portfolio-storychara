import React from "react";
import { useState } from "react";
import "../util/Certification.css"
import { courses } from "./Skills";

const TOTAL_DIPLOMAS = courses.length;

const getDiplomaImages = () => {
  return Array.from({ length: TOTAL_DIPLOMAS }, (_, i) => {
    try {
      const reverseIndex = TOTAL_DIPLOMAS - i;
      return require(`../components/img/cert/__page-${String(reverseIndex).padStart(4, "0")}.jpg`);
    } catch {
      return null;
    }
  }).filter(Boolean);
};

const DiplomasCarousel = () => {
  const images = getDiplomaImages();
  const [idx, setIdx] = useState(0);

  const goNext = () => setIdx((prev) => (prev + 1) % images.length);
  const goPrev = () => setIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <div className="carousel-imgbox">
        <button className="carousel-button prev" onClick={goPrev} aria-label="Anterior">&#8592;</button>
        <img
          src={images[idx]}
          alt={`Diploma #${idx + 1}`}
          className="carousel-image"
        />
        <button className="carousel-button next" onClick={goNext} aria-label="Siguiente">&#8594;</button>
      </div>
      <div className="carousel-indicator">
        {idx + 1} / {images.length}
      </div>
    </div>
  );
};

export default DiplomasCarousel;