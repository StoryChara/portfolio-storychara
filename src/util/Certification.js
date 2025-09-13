import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Certification.css";
import { getCertificaciones } from "./Diplomas";

const DiplomasCarousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const certs = await getCertificaciones();
      setImages(certs);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="carousel-container d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
        Cargando diplomas…
      </div>
    );
  }

  if (!images.length) {
    return (
      <div className="carousel-container d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
        No se encontraron diplomas
      </div>
    );
  }

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