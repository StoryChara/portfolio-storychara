import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

import { projects } from '../util/Projects'

const ProjectCard = ({ image, title, description, technologies, github, web }) => (
  <div className="project-card">
    <img src={image} alt={`Screenshot de ${title}`} className="project-image" />
    <h3 className="retro-title">{title}</h3>
    <p className="retro-text project-desc">{description}</p>
    <div className="project-techs">
      {technologies.map((tech, idx) => (
        <span key={idx} className="project-tech">{tech}</span>
      ))}
    </div>
    <div className="project-buttons">
      <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info project-github" aria-label={`Ver código de ${title} en GitHub`}>
        <i className="fab fa-github me-2"></i> GitHub
      </a>
      {web && (
        <a href={web} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info project-github" aria-label={`Ir al sitio web del proyecto ${title}`}>
          <i className="fas fa-external-link-alt me-2"></i> Ver Web
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <Container fluid className="project-container">
      <h2 className="retro-title text-center project-title-main">My Projects</h2>
      <Row className="projects-row justify-content-center">
        {projects.map((proj, idx) => (
          <Col key={idx} xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center p-3">
            <ProjectCard {...proj} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
