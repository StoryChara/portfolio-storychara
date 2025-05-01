import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

import IMG_planifiklub from '../components/img/planifiklub.png';
import IMG_nodemailer from '../components/img/nodemailer-api-pk.png';
import IMG_cakedelivery from '../components/img/cake-delivery.png'
import IMG_punchout from '../components/img/punch-out.png'

const projects = [
  {
    image: IMG_planifiklub, 
    title: 'PlanifiKlub',
    description: 'Web platform dedicated to country clubs for booking buildings for their events.',
    technologies: ['React', 'Node.js', 'JavaScript Syntax eXtension'],
    github: 'https://github.com/luisdiazv/planifiklub',
    web: 'https://planifiklub.vercel.app/'
  },
  {
    image: IMG_nodemailer,
    title: 'NodeMailer API - PlanifiKlub',
    description: 'API for the email function of the PlanifiKlub platform.',
    technologies: ['JavaScript', 'API'],
    github: 'https://github.com/luisdiazv/pk_EmailService'
  },
  {
    image: IMG_cakedelivery,
    title: 'Cake Delivery',
    description: 'Compiler that works like a simple RPG-style game with an aesthetic similar to games from the 1980s.',
    technologies: ['Python', 'Compiler'],
    github: 'https://github.com/camunozv/CakeDelivery'
  },
  {
    image: IMG_punchout,
    title: 'Punch-Out!!!',
    description: 'Recreation of Nintendo’s Punch-Out game, specifically the level of the battle against Mike Tyson.',
    technologies: ['JavaScript', 'HTML', 'Processing'],
    github: 'https://github.com/StoryChara/punch-out',
    web: 'https://storychara.github.io/punch-out/'
  },
  /*
  {
    image: ,
    title: '',
    description: '',
    technologies: [''],
    github: '',
    web: ''
  },
  */
];

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
          <Col key={idx} xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <ProjectCard {...proj} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
