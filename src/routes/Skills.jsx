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
          institution: "Universidad Nacional de Colombia - Bogotá",
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
     { name: "Python", certified: true, porcentage: "80%" },
     { name: "C++", certified: true, porcentage: "40%" },
     { name: "Java", certified: false, porcentage: "40%" },
     { name: "MySQL", certified: false, porcentage: "60%" },
     { name: "HTML", certified: false, porcentage: "50%" },
     { name: "JavaScript", certified: false, porcentage: "70%" },
     { name: "CSS", certified: false, porcentage: "30%" },
     { name: "ReactJS", certified: false, porcentage: "25%" }
];

// Función para convertir el porcentaje de string a número
const getPercentageNumber = (percentageStr) => {
     return parseInt(percentageStr.replace('%', ''));
};

const getSkillLevel = (percentageStr) => {
     const percentage = getPercentageNumber(percentageStr);
     if (percentage <= 35) return "Básico";
     if (percentage <= 75) return "Intermedio";
     if (percentage <= 80) return "Avanzado";
     return "Profesional";
};
     

const Skills = () => {
     return (
          <Container fluid className="skills-container">
          {/* Sección de Educación */}
               <Row className="justify-content-center">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Educación</h2>
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
                         <h2 className="retro-title text-center mb-5">Conocimientos Informáticos</h2>
                    </Col>
                    {skills.map((skill, idx) => (
                         <Col key={idx} xs={6} md={4} lg={3} className="mb-4">
                              <div className="skill-card">
                                   <h3 className="skill-name">{skill.name}</h3>
                                   <div className='skill-level'> <div className="level-bar" style={{ width: skill.porcentage}}></div> </div>
                                   <p className="skill-info"> Nivel {getSkillLevel(skill.porcentage)} </p>
                                   <p className='skill-info'> {skill.certified && <span className="certified-badge">Certificado</span>} </p>
                              </div>
                         </Col>
                    ))}
               </Row>
          </Container>
     );
};
export default Skills;
