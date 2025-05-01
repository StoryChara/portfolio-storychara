import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-section">
          <i className="fa-solid fa-code fa-flip-horizontal" style={{color: '#ff0000'}}></i>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" className="nav-link-custom">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="nav-link-custom">PROJECTS</Nav.Link>
            <Nav.Link as={NavLink} to="/skills" className="nav-link-custom">SKILLS</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">CONTACT</Nav.Link>
          </Nav>
          
          {/* Sección de redes sociales */}
          <div className="social-links">
            <a href="https://github.com/StoryChara" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:mjarah@unal.edu.co" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope me-2"></i>
            </a>
            <a href="https://www.linkedin.com/in/mjarah/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
