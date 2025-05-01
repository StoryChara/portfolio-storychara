import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const education = [
     {
          institution: "Universidad Nacional de Colombia",
          title: "Ingeniería de Sistemas y Computación",
          period: "Actual"
     }
];
     

const Skills = () => {
     return (
          <Container fluid className="skills-container">
               <Row className="justify-content-center">
                    <Col xs={12}>
                         <h2 className="retro-title text-center mb-5">Contact Me</h2>
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
          </Container>
     );
};
export default Skills;