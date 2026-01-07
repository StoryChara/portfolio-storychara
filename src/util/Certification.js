import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Certification.css";
import { getCertificaciones } from "./Diplomas";

const DiplomasCarousel = () => {
  const [images, setImages] = useState([{name:'...', url: "/project-images/placeholder.png"}]);

  useEffect(() => {
    const load = async () => {
      const certs = await getCertificaciones();
      setImages(certs);
    };
    load();
  }, []);

  return (
    <Carousel className="carousel-container">
      {images.map(({ name, url }) => (
        <Carousel.Item key={name}>
          <img src={url} alt={`Diploma ${name}`} className="carousel-image" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default DiplomasCarousel;