import { PROJECTS } from "../data";

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <p>Here are some of my recent projects:</p>
      <ul>
        {PROJECTS.map((project, index) => (
          //Add the link of the project that takes you to the actual project page (Routing)You can also use React Router for better navigation
          <li
            key={index}
            onClick={() => window.open("Add link here", "_blank")}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
