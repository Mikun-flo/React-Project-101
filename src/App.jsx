import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import Card from "./components/Card.jsx";
import Dev from "./components/Dev.jsx";
import { PROJECTS } from "./data.js";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Projects></Projects>
      <div className="cards-container">
        {PROJECTS.map((project, index) => (
          <Card key={index} title={project.title} text={project.text} />
        ))}
      </div>

      <section className="contact-form-section">
        <h2 className="contact-form-title">Contact Me</h2>
        <p className="contact-form-subtitle">Kindly drop your details</p>

        <Dev
          name="Mikun Flo"
          role="Frontend Developer"
          skills="HTML, CSS, JavaScript"
          isDev={true}
        ></Dev>
      </section>

      <Footer></Footer>
    </div>
  );
}
