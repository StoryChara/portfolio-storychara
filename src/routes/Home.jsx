import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import profileImage from '../components/img/icon.jpg';

const stats = [
  { number: "10+", text: "Programming & Technologies" },
  { number: "5+", text: "Years Study" },
  { number: "30+", text: "Courses & Certifications" }
]

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row className="hero-section justify-content-center">
        <Col xs={12} sm={8} md={6} lg={3} className="profile-section">
          <div className="profile-card">
            <div className="profile-header">
              <img src={profileImage} alt="Foto de StoryChara desarrollador full stack" className="profile-image" />
              <p className='retro-title'>Story Chara</p>
              <p className="retro-text">Developer</p>
            </div>
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
            <a className="btn btn-outline-info mt-4" href="/HV.pdf" download role="button">
              <i className="fas fa-download me-2"></i>
              Download CV
            </a>
          </div>
        </Col>

        <Col md={12} lg={5} className="intro-section">
          <div className="intro-content">
            <p className='retro-text'>Hey, I'm <span className="highlight">María José Jara Herrera</span></p>
            <p className='retro-title'>Developer</p>
            <p className="retro-text">
              A passionate Systems and Computing Engineering student with a particular interest in data science and
              information management. My fascination with data organization and analysis drives me to seek efficient
              and structured solutions in every project I undertake.
            </p>
          </div>

          <Row className="stats-table justify-content-center">
            {stats.map((item, idx) => (
              <Col key={idx} xs={12} md={5} lg={6} xl={5} className="mb-4">
                <div className="stat-card">
                  <p className='retro-title'> {item.number} </p>
                  <p className='retro-text'> {item.text} </p>
                </div>
              </Col>
            ))}
          </Row>

        </Col>
      </Row>

      {/* About Section */}
      <Row className="about-section justify-content-center">
        <Col className="justify-content-center mb-5">
          <p className='retro-title'>About Me</p>
          <p className='retro-text'>
            Beyond code, I'm a gaming enthusiast, especially of Nintendo's innovative franchises, which has helped me
            develop creative and problem-solving thinking. This passion for video games complements my perspective on
            software development, allowing me to bring a unique approach to my projects.
            <br></br><br></br>
            My creative process is enhanced while listening to music, creating an ideal environment for programming and
            developing technological solutions. This combination of technology, creativity, and methodology defines my
            profile as a developer.
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
