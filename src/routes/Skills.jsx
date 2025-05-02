import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const education = [
     {
          institution: "Universidad Nacional de Colombia",
          title: "Ingeniería de Sistemas y Computación",
          period: "Actual"
     },
     {
          institution: "I.E. Claretiano Gustavo Torres Parra",
          title: "Bachiller Académico",
          period: "2019"
     },
     {
          institution: "Universidad de los Andes",
          title: "Backend con Python",
          period: "2025"
     },
     {
          institution: "Udemy",
          title: "Wordpress for Beginners - Master Wordpress Quickly",
          period: "2025"
     },
     {
          institution: "Skillsoft",
          title: "Concurrency",
          period: "2025"
     },
     {
          institution: "goFLUENT",
          title: "CEFR B2 / goFLUENT B2.2",
          period: "2025"
     },
     {
          institution: "Udemy",
          title: "Redacción de Prompts y Usos Prácticos para IA y Chat GPT",
          period: "2025"
     },
     {
          institution: "Udemy",
          title: "Agentes de IA - Transformando Negocios y Procesos Complejos",
          period: "2025"
     },
     {
          institution: "Coursera",
          title: "AI Now 2.0 - Use GEN AI as your Thought Partner - Module 2",
          period: "2025"
     },
     {
          institution: "Coursera",
          title: "AI Now 2.0 - Use GEN AI as your Thought Partner - Module 1",
          period: "2025"
     },
     {
          institution: "Universidad del Rosario",
          title: "Codificación y Programación en Python",
          period: "2023"
     },
     {
          institution: "SENA",
          title: "Habilidades Para La Vida",
          period: "2023"
     },
     {
          institution: "Prueba TOEFL",
          title: "Certificación De Inglés B2",
          period: "2021"
     },
     {
          institution: "WIE UNAL",
          title: "Curso de Programación en Python",
          period: "2021"
     },
     {
          institution: "SENA",
          title: "Arquitectura de Computadores",
          period: "2021"
     },
     {
          institution: "Universidad Nacional de Colombia",
          title: "Laboratorio Innovación - Taller Práctico de Programación Para Todos",
          period: "2021"
     },
     {
          institution: "SENA",
          title: "Diseño de Videojuegos en Tercera Persona con UNITY",
          period: "2020"
     },
     {
          institution: "Universidad Nacional de Colombia",
          title: "Competencias Para La Gestión De La Información",
          period: "2020"
     },
     {
          institution: "EAN Universidad",
          title: "Inducción a la Matemática Universitaria",
          period: "2020"
     },
     {
          institution: "Fundación Carlos Slim",
          title: "Introducción a la Programación",
          period: "2020"
     },
     {
          institution: "SENA",
          title: "English Dot Works 7 (Ingles)",
          period: "2020"
     },
     {
          institution: "SENA",
          title: "English Dot Works 6 (Ingles)",
          period: "2020"
     },
     {
          institution: "SENA",
          title: "Programación C++ Nivel II: Módulos, Estructura de Almacenamiento y POO",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "Programación C++ Nivel I: Estructura del Lenguaje de Programación C++",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "Conceptualización del Lenguaje de Programación C++",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "Estrategias Para El Mejoramiento De La Comprensión Lectora",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "Manejo de Adobe Photoshop",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "English Dot Works 5 (Ingles)",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "English Dot Works 4 (Ingles)",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "English Dot Works 3 (Ingles)",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "English Dot Works 2 (Ingles)",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "English Dot Works 1 (Ingles)",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "English Dot Works 0 (Ingles)",
          period: "2019"
     },
     {
          institution: "SENA",
          title: "Diseño y Prototipado",
          period: "2018",
     },
     {
          institution: "SENA",
          title: "Tecnoacademia: Contextualización en Ciencia, Tecnología e Innovación",
          period: "2018",
     }
];

const skills = [
     { name: "Python", certified: true, porcentage: "85%", icon: "fa-brands fa-python" },
     { name: "C++", certified: true, porcentage: "40%", icon: "fa-solid fa-terminal" },
     { name: "Java", certified: false, porcentage: "40%", icon: "fa-brands fa-java" },
     { name: "Matlab", certified: false, porcentage: "40%", icon: "fa-solid fa-arrow-down-1-9" },
     { name: "MySQL", certified: false, porcentage: "60%", icon: "fa-solid fa-database" },
     { name: "Postgress", certified: false, porcentage: "30%", icon: "fa-solid fa-database" },
     { name: "HTML", certified: false, porcentage: "50%", icon: "fa-brands fa-html5" },
     { name: "JavaScript", certified: false, porcentage: "70%", icon: "fa-brands fa-js" },
     { name: "CSS", certified: false, porcentage: "30%", icon: "fa-brands fa-css" },
     { name: "WordPress", certified: false, porcentage: "25%", icon: "fa-brands fa-wordpress" },
     { name: "React", certified: false, porcentage: "25%", icon: "fa-brands fa-react" },
     { name: "NodeJS", certified: false, porcentage: "25%", icon: "fa-brands fa-node-js" }
];

const languages = [
     { name: "Spanish", porcentage: "100%" },
     { name: "English", porcentage: "60%" },
     { name: "Japanese", porcentage: "20%" }
];

// Función para convertir el porcentaje de string a número
const getPercentageNumber = (percentageStr) => {
     return parseInt(percentageStr.replace('%', ''));
};

const getSkillLevel = (percentageStr) => {
     const percentage = getPercentageNumber(percentageStr);
     if (percentage <= 35) return "Basic";
     if (percentage <= 75) return "Intermediate";
     if (percentage <= 85) return "Advanced";
     if (percentage <= 99) return "Professional";
     return "Native";
};
     

const Skills = () => {
     return (
          <Container fluid className="skills-container">
          {/* Sección de Educación */}
               <Row className="justify-content-center">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Academic Information</h2>
                    </Col>
                    {education.map((item, idx) => (
                         <Col key={idx} xs={12} md={6} lg={4} className="mb-4">
                              <div className="education-card">
                              <div className="education-period">{item.period}</div>
                              <h3 className="education-institution">{item.institution}</h3>
                              <p className="education-title">{item.title}</p>
                              </div>
                         </Col>
                    ))}
               </Row>
               {/* Sección de Habilidades */}
               <Row className="justify-content-center mt-5">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Programming Languages</h2>
                    </Col>
                    {skills.map((skill, idx) => (
                         <Col key={idx} xs={6} md={4} lg={3} className="mb-4">
                              <div className="skill-card">
                                   <h3 className="skill-name">
                                        <i className={skill.icon} style={{ marginRight: "8px", fontSize: "1.5rem" }}></i>
                                        {skill.name}
                                   </h3>
                                   <div className='skill-level'> <div className="level-bar" style={{ width: skill.porcentage}}></div> </div>
                                   <p className="skill-info"> {getSkillLevel(skill.porcentage)} Level </p>
                                   <p className='skill-info'> {skill.certified && <span className="certified-badge">Certificate</span>} </p>
                              </div>
                         </Col>
                    ))}
               </Row>
               {/* Sección de Idiomas */}
               <Row className="justify-content-center mt-5">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Languages</h2>
                    </Col>
                    {languages.map((language, idx) => (
                         <Col key={idx} xs={6} md={4} lg={3} className="mb-4">
                              <div className="skill-card">
                                   <h3 className="skill-name">{language.name}</h3>
                                   <div className='skill-level'> <div className="level-bar" style={{ width: language.porcentage}}></div> </div>
                                   <p className="skill-info"> {getSkillLevel(language.porcentage)} Level </p>
                              </div>
                         </Col>
                    ))}
               </Row>
          </Container>
     );
};
export default Skills;
