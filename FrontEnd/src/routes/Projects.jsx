import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

import { getProyectos, getExperiencia } from '../util/Work';

const ProjectCard = ({ image_url, title, description, technologies, github, web }) => (
  <div className="project-card">
    <img src={image_url} alt={`Screenshot de ${title}`} className="project-image" />
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
  const [allProjects, setAllProjects] = useState(
    [{ description: "...", image_url: "/project-images/placeholder.png", title: "...", github: "https://github.com/StoryChara", technologies: ["...", "...", "..."] },
    { description: "...", image_url: "/project-images/placeholder.png", title: "...", github: "https://github.com/StoryChara", technologies: ["...", "...", "..."] },
    { description: "...", image_url: "/project-images/placeholder.png", title: "...", github: "https://github.com/StoryChara", technologies: ["...", "...", "..."] }]);
    useEffect(() => {
      const loadAllProjects = async () => {
        try {
          const projects = await getProyectos();
          setAllProjects(projects);
        } catch (error) {
          console.error('Error loading projects:', error);
        }
      };
      
      loadAllProjects();
    }, []);

    
    const [work, setWork] = useState([
      {period: "...", institution: "...", position: "...", supervisor: "...", city: "...", functions: ["...","...","..."]},
      {period: "...", institution: "...", position: "...", supervisor: "...", city: "...", functions: ["...","...","..."]}]);
  
    useEffect(() => {
      const loadWorkExperience = async () => {
        try {
          const experience = await getExperiencia();
          setWork(experience);
        } catch (error) {
          console.error('Error loading work experience:', error);
        }
      };
      loadWorkExperience();
    }, []);

  return (
    <Container fluid className="project-container">
      <h2 className="retro-title text-center project-title-main">My Projects</h2>
      <Row className="projects-row justify-content-center">
        {allProjects.map((proj, idx) => (
          <Col key={idx} xs={12} md={6} xl={4} className="d-flex justify-content-center p-3">
            <ProjectCard {...proj} />
          </Col>
        ))}
      </Row>

      <hr style={{ opacity: 0, visibility: 'hidden' }}/>

      {/* Sección de Referencias Profesionales */}
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
              {item.functions.map((funcItem, funcIdx) => (
                <p key={funcIdx} className="work-function">
                  <i className="fa-solid fa-list-check"></i> {funcItem}
                </p>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </Container>

    
  );
};

export default Projects;
