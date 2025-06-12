// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
     return (
          <footer className="custom-footer">
               <Container>
                    <Row className="footer-content">
                         <Col md={4} className="footer-section">
                              <h3 className="footer-title">CONTACT</h3>
                              <div className="social-links">
                                   <a href="https://github.com/StoryChara" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                   </a>
                                   <a href="https://discord.com/users/349912950649126913" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-discord"></i>
                                   </a>
                                   <a href="https://www.linkedin.com/in/mjarah/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-linkedin"></i>
                                   </a>
                                   <a href="mailto:mjarah@unal.edu.co" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-envelope me-2"></i>
                                   </a>
                              </div>
                         </Col>

                         <Col md={4} className="footer-section text-center">
                              <div className="footer-logo">
                                   <i className="fa-solid fa-code fa-flip-horizontal" style={{ color: '#d00000' }}></i>
                                   <h3 className="mt-2">Story_Chara</h3>
                              </div>
                         </Col>

                         <Col md={4} className="footer-section">
                              <h3 className="footer-title">NAVIGATION</h3>
                              <ul className="footer-links">
                                   <li><Link to="/">Home</Link></li>
                                   <li><Link to="/projects">Projects</Link></li>
                                   <li><Link to="/skills">Skills</Link></li>
                                   <li><Link to="/contact">Contact</Link></li>
                              </ul>
                         </Col>
                    </Row>

                    <Row>
                         <Col className="copyright">
                              <p>© {new Date().getFullYear()} Story_Chara | <i className="fas fa-heart"></i></p>
                         </Col>
                    </Row>
               </Container>
          </footer>
     );
}

export default Footer;
