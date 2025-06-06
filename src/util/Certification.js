import { Carousel } from "react-bootstrap";
import "./Certification.css";

// Importa todas las imágenes automáticamente
const importAll = (r) => r.keys().map(r).reverse();
const images = importAll(require.context('../components/img/cert/', false, /__page-\d{4}\.jpg$/));

const DiplomasCarousel = () => {
  return (
    <Carousel className='carousel-container'>
      {images.map((item, idx) => (
          <Carousel.Item>
            <img
              src={images[idx]}
              alt={`Diploma #${idx + 1}`}
              className="carousel-image"
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default DiplomasCarousel;