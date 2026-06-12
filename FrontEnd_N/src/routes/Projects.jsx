import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Projects.css';

import { getProyectos, getExperiencia, getDesigns } from '../util/Work';

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

const DesignCard = ({ image_url, title, description, post }) => (
    <div className="project-card design-card">
        <div className="design-image-frame">
            <img src={image_url} alt={`Diseño de ${title}`} className="project-image design-image" />
        </div>
        <div className="design-content">
            <h3 className="retro-title">{title}</h3>
            <p className="retro-text design-desc">{description}</p>
            <div className="design-post-slot">
                {post && (
                    <a href={post} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info design-post" aria-label={`Ver publicación relacionada con ${title}`}>
                        <i className="fas fa-newspaper me-2"></i> Ver Publicación
                    </a>
                )}
            </div>
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
        { period: "...", institution: "...", position: "...", supervisor: "...", city: "...", functions: ["...", "...", "..."] },
        { period: "...", institution: "...", position: "...", supervisor: "...", city: "...", functions: ["...", "...", "..."] }]);

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

    const [allDesigns, setAllDesigns] = useState(
        [{ title: "...", description: "...", image_url: "/design/placeholder.png", post: null },
        { title: "...", description: "...", image_url: "/design/placeholder.png", post: null },
        { title: "...", description: "...", image_url: "/design/placeholder.png", post: null }]);

    useEffect(() => {
        const loadDesigns = async () => {
            try {
                const designs = await getDesigns();
                console.log("Designs cargados:", designs);
                setAllDesigns(designs);
            } catch (error) {
                console.error('Error loading designs:', error);
            }
        };

        loadDesigns();
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

            <hr style={{ opacity: 0, visibility: 'hidden' }} />

            <h2 className="retro-title text-center project-title-main">My Designs</h2>
            <div className="designs-carousel-wrap">
                <Carousel className="designs-carousel" interval={null}>
                    {allDesigns.map((design, idx) => (
                        <Carousel.Item key={`${design.title}-${idx}`}>
                            <div className="designs-carousel-slide">
                                <DesignCard {...design} />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <hr style={{ opacity: 0, visibility: 'hidden' }} />

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
                                <i className="fa-solid fa-user-tag"></i> {item.supervisor}
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
