import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

import { work, ref } from '../util/Contact';

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

        {/* Sección de Referencias Personales y Familiares */}
        <Col xs={12} className="section-container">
          <h2 className="retro-title text-center">Personal & Familiar <br></br> References</h2>
          <Row>
            {ref.map((item, idx) => (
              <Col key={idx} xs={12} md={6} className="mb-4">
                <div className="ref-card">
                  <p className="ref-name"> <i className="fas fa-user"></i> {item.name} </p>
                  <p className="ref-position">{item.position}</p>
                  {item.type === 'F' && (
                      <p className="ref-position"> <i className="fa-solid fa-people-roof"></i> Familiar Reference</p>
                  )}
                  {item.type === 'P' && (
                    <p className="ref-position"> <i class="fa-solid fa-people-group"></i> Personal Reference</p>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Col>

      </Row>
    </Container>
  );
};

export default Contact;