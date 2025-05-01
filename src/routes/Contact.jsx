import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const work = [
  {
    institution: "Cazuela Restaurante",
    position: "Cashier",
    function: "I was in charge of collecting payment for services and lunches offered at the restaurant, customer service.",
    supervisor: "Augusto Morales",
    city: "Neiva, Huila",
    period: '2018-2019'
  },
  {
    institution: "Universidad Nacional de Colombia",
    position: "Monitor",
    function: "I was responsible for resolving student inquiries and grading assignments in the course.",
    supervisor: "Jhonatan Rico",
    city: "Bogotá D.C",
    period: '2025'
  }
];

const ref = [
  {
    name: "Carolina Jara",
    position: "Systems Engineer UNIMETA",
    type: "F"
  },
  {
    name: "Jenny Poveda",
    position: "Physiotherapist",
    type: "F"
  },
  {
    name: "Diego Caro",
    position: "Systems Engineer ASUS COLOMBIA - Web Designer",
    type: "P"
  },
  {
    name: "James Olaya",
    position: "Bachelor in Physics",
    type: "P"
  }
];

const Contact = () => {
  return (
    <Container fluid className="contact-container">
      <Row className="justify-content-center">
        {/* Sección de Contacto Directo */}
        <Col xs={12} className="section-container">
          <h2 className="retro-title text-center">Contact Me</h2>
          <div className="contact-links">
            <a href="mailto:mjarah@unal.edu.co" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
              <span>mjarah@unal.edu.co</span>
            </a>
            <a href="https://wa.me/573157978099" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
              <span>+57 315 7978099</span>
            </a>
            <a href="tel:+573157978099" className="contact-link">
              <i className="fas fa-phone"></i>
              <span>+57 315 7978099</span>
            </a>
          </div>
        </Col>

        {/* Sección de Redes Sociales */}
        <Col xs={12} className="section-container">
          <h2 className="retro-title text-center">Social Network</h2>
          <div className="social-links">
               <a href="https://github.com/StoryChara" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" style={{fontSize: "2.5rem"}}></i>
               </a>
               <a href="https://discord.com/users/349912950649126913" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-discord" style={{fontSize: "2.5rem"}}></i>
               </a>
               <a href="https://www.linkedin.com/in/mjarah/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-linkedin" style={{fontSize: "2.5rem"}}></i>
               </a>
               <a href="mailto:mjarah@unal.edu.co" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope me-2" style={{fontSize: "2.5rem"}}></i>
               </a>
               <a href="https://wa.me/573157978099" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" style={{fontSize: "2.5rem"}}></i>
               </a>
               <a href="tel:+573157978099">
                    <i className="fas fa-phone" style={{fontSize: "2.5rem"}}></i>
               </a>
          </div>
        </Col>

        {/* Sección de Referencias Profesionales */}
        <Col xs={12} className="section-container">
          <h2 className="retro-title text-center">Professional Experience</h2>
          <Row>
            {work.map((item, idx) => (
              <Col key={idx} xs={12} md={6} className="mb-4">
                <div className="work-card">
                  <div className="work-period">{item.period}</div>
                  <h3 className="work-institution">{item.institution}</h3>
                  <p className="work-position">{item.position}</p>
                  <p className="work-supervisor">
                    <i class="fa-solid fa-user-tag"></i> {item.supervisor}
                  </p>
                  <p className="work-city">
                    <i className="fas fa-map-marker-alt"></i> {item.city}
                  </p>
                  <p className="work-function">
                    <i class="fa-solid fa-list-check"></i> {item.function}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Referencias Personales y Familiares */}
        <Col xs={12} className="section-container">
          <Row>
            <Col xs={12} md={6}>
              <h2 className="retro-title text-center">Personal <br></br> References</h2>
              <div className="references-container">
                {ref.filter(r => r.type === 'P').map((item, idx) => (
                  <div key={idx} className="ref-card">
                    <p className="ref-name"><i className="fas fa-user"></i> {item.name}</p>
                    <p className="ref-position">{item.position}</p>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={12} md={6}>
              <h2 className="retro-title text-center">Family <br></br> References</h2>
              <div className="references-container">
                {ref.filter(r => r.type === 'F').map((item, idx) => (
                  <div key={idx} className="ref-card">
                    <p className="ref-name"><i className="fas fa-user"></i> {item.name}</p>
                    <p className="ref-position">{item.position}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;