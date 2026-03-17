import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

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
               <a href="https://t.me/m_jara_h" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-telegram" style={{fontSize: "2.5rem"}}></i>
               </a>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Contact;