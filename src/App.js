import React from "react";

const projects = [
  { name: "Carton Aleatorio", url: "https://github.com/tu-usuario/Carton_Aleatorio" },
  { name: "Punch-Out", url: "https://github.com/tu-usuario/punch-out" },
  { name: "Angry Birds", url: "https://github.com/StoryChara/Angry-Birds" }
];

function App() {
  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "20px" }}>
      <h1>Mi Portafolio</h1>
      <p>Bienvenido a mi portafolio. Aquí están mis proyectos en GitHub:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((project, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
