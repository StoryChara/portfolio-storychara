import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

import { getEducation, getCourses, getSkills, getLanguages, getOtherSkills, getSkillLevel } from '../util/Skills'
import DiplomasCarousel from '../util/Certification';

const Skills = () => {
     const [education, setEducation] = useState([{period: '...', institution: '...', title: '...'}, {period: '...', institution: '...', title: '...'} ]);
     const [courses, setCourses] = useState([{period: '...', institution: '...', title: '...'}, {period: '...', institution: '...', title: '...'} ]);
     const [skills, setSkills] = useState([{icon: 'fa-solid fa-spinner', name: '...', percentage: 50, certified: false}, {icon: 'fa-solid fa-spinner', name: '...', percentage: 0, certified: false}]);
     const [languages, setLanguages] = useState([{name: '...', percentage: 50}, {name: '...', percentage: 0 }]);
     const [others, setOthers] = useState([{name: "..."}, {name: "..."}, {name: "..."}]);

     useEffect(() => {
          const loadData = async () => {    
               try {
                    const eduData = await getEducation();
                    setEducation(eduData);
                    const courseData = await getCourses();
                    setCourses(courseData);
                    const skillData = await getSkills();
                    setSkills(skillData);
                    const langData = await getLanguages();
                    setLanguages(langData);
                    const otherData = await getOtherSkills(6);
                    setOthers(otherData);
               } catch (error) {
                    console.error('Error loading education data:', error);
               }
          };
          loadData();
     }, []);

     return (
          <Container fluid className="skills-container">

               {/* Sección de Educación */}
               <Row className="justify-content-center">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Academic Information</h2>
                    </Col>
                    {education.map((item, idx) => (
                         <Col key={idx} xs={12} md={6} lg={4} xl={3} className="mb-4">
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
                         <h2 className="retro-title text-center mb-5">Courses</h2>
                    </Col>
                    {courses.map((item, idx) => (
                         <Col key={idx} xs={12} md={6} lg={4} xl={3} className="mb-4">
                              <div className="education-card">
                                   <div className="education-period">{item.period}</div>
                                   <h3 className="education-institution">{item.institution}</h3>
                                   <p className="education-title">{item.title}</p>
                              </div>
                         </Col>
                    ))}
               </Row>

               <Row className='justify-content-center'>
                    <h2 className='retro-title text-center'>Certificates</h2>
                    <DiplomasCarousel />
               </Row>

               {/* Sección de Habilidades */}
               <Row className="justify-content-center mt-5">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Programming & Technologies</h2>
                    </Col>
                    {skills.map((skill, idx) => (
                         <Col key={idx} xs={12} md={6} lg={4} xl={3} className="mb-4">
                              <div className="skill-card">
                                   <h3 className="skill-name">
                                        <i className={skill.icon}></i><br></br>
                                        {skill.name}
                                   </h3>
                                   <div className='skill-level'> <div className="level-bar" style={{ width: `${skill.percentage}%` }}></div> </div>
                                   <p className="skill-info"> {getSkillLevel(skill.percentage)} Level </p>
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
                         <Col key={idx} xs={12} md={6} lg={4} xl={3} className="mb-4">
                              <div className="skill-card">
                                   <h3 className="skill-name">{language.name}</h3>
                                   <div className='skill-level'> <div className="level-bar" style={{ width: `${language.percentage}%` }}></div> </div>
                                   <p className="skill-info"> {getSkillLevel(language.percentage)} Level </p>
                              </div>
                         </Col>
                    ))}
               </Row>

               {/* Sección de Otras Habilidades */}
               <Row className="justify-content-center mt-5">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Others Knowledge and Skills</h2>
                    </Col>
                    <div className="other-section">
                         <ul className="retro-text undertale-heart-list list-unstyled ps-3">
                              {others.map((other, idx) => (
                                   <li className="mb-3" key={idx}>
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
