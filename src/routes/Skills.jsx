import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

import { education, courses, skills, languages, others, getSkillLevel } from '../util/Skills'
     
const Skills = () => {
     return (
          <Container fluid className="skills-container">

               {/* Sección de Educación */}
               <Row className="justify-content-center">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Academic Information</h2>
                    </Col>
                    {education.map((item, idx) => (
                         <Col key={idx} xs={12} md={6} lg={3} className="mb-4">
                              <div className="education-card">
                              <div className="education-period">{item.period}</div>
                              <h3 className="education-institution">{item.institution}</h3>
                              <p className="education-title">{item.title}</p>
                              </div>
                         </Col>
                    ))}
               </Row>

                {/* Sección de Cursos */}
                <Row className="justify-content-center">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Courses & Certifications</h2>
                    </Col>
                    {courses.map((item, idx) => (
                         <Col key={idx} xs={12} md={6} lg={3} className="mb-4">
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
                         <h2 className="retro-title text-center mb-5">Programming & Technologies</h2>
                    </Col>
                    {skills.map((skill, idx) => (
                         <Col key={idx} xs={12} md={6} lg={3} className="mb-4">
                              <div className="skill-card">
                                   <h3 className="skill-name">
                                        <i className={skill.icon}></i><br></br>
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
                         <Col key={idx} xs={12} md={6} lg={3} className="mb-4">
                              <div className="skill-card">
                                   <h3 className="skill-name">{language.name}</h3>
                                   <div className='skill-level'> <div className="level-bar" style={{ width: language.porcentage}}></div> </div>
                                   <p className="skill-info"> {getSkillLevel(language.porcentage)} Level </p>
                              </div>
                         </Col>
                    ))}
               </Row>

               {/* Sección de Otras Habilidades */}
               <Row className="justify-content-center mt-5">
                    <Col xs={10}>
                         <h2 className="retro-title text-center mb-5">Others Knowledge and Skills</h2>
                    </Col>
                    <div className="other-section">
                         <ul>
                              {others.map((other, idx) => (
                                   <li key={idx}> 
                                        <i class="fa-solid fa-check-to-slot"></i> 
                                        {other.name}.
                                   </li>
                              ))}
                         </ul>
                    </div>
               </Row>

          </Container>
     );
};
export default Skills;
