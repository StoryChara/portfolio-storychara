import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import profileImage from '../components/img/icon.jpg';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row className="hero-section justify-content-center">
        <Col lg={4} className="profile-section">
          <div className="profile-card">
            <div className="profile-header">
              <img src={profileImage} alt="Foto de StoryChara desarrollador full stack" className="profile-image" />
              <p className='retro-title'>StoryChara</p>
              <p className="retro-text">Developer</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/StoryChara" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:mjarah@unal.edu.co" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <i className="fas fa-envelope me-2"></i>
              </a>
              <a href="https://wa.me/573157978099" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <a className="btn btn-outline-info mt-4" href="/HV.pdf" download role="button">
              <i className="fas fa-download me-2"></i>
              Descargar CV
            </a>
          </div>
        </Col>

        <Col lg={6} className="intro-section">
          <div className="intro-content">
            <p className='retro-text'>Hey, I'm <span className="highlight">María José Jara Herrera</span></p>
            <p className='retro-title'>Developer</p>
            <p className="retro-text">
              text
            </p>
          </div>

          <Row className="stats-row">
            <Col xs={12} md={4} className="stat-card">
              <p className='retro-title'>#</p>
              <p className='retro-text'>text</p>
            </Col>
            <Col xs={12} md={4} className="stat-card">
              <p className='retro-title'>#</p>
              <p className='retro-text'>text</p>
            </Col>
            <Col xs={12} md={4} className="stat-card">
              <p className='retro-title'>#</p>
              <p className='retro-text'>text</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* About Section */}
      <Row className="about-section">
        <Col lg={12} className="text-center mb-5">
          <p className='retro-title'>About Me</p>
          <p className='retro-text'>
            text
          </p>
          <a className="btn btn-outline-info mt-4" href="/projects" role="button">
            View Projects
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
