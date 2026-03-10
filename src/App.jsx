import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./Projects.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import Dev from "./components/Dev.jsx";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Projects></Projects>
      <div className="cards-container">
        <Card
          title="Project 1 - Web App Dashboard"
          text="Interactive analytics dashboard with real-time charts."
        />
        <Card
          title="Project 2 - The 24th Avenue"
          text="Full-stack online store with cart & payments."
        />
        <Card
          title="Project 3 - Birthday Countdown"
          text="A web timer that counts down to a particular set date."
        />
        <Card
          title="Project 4 - Jewelry Blog"
          text="A short article blog about jewelry trends."
        />
        <Card
          title="Project 5 - Suite V2 - Landing Page"
          text="A mock up web landing page."
        />
        <Card
          title="Project 6 - The 24th Avenue E-commerce"
          text="A Jewelry E-commerce website."
        />
        <Card
          title="Project 7 - Ayomikun's Portfolio"
          text="Personal portfolio website."
        />
        <Card
          title="Project 8 - Placeholder Text I"
          text="This is just a placeholder text."
        />
        <Card
          title="Project 9 - Placeholder Text II"
          text="This is just another placeholder text."
        />
      </div>
      <hr></hr>

      <Button></Button>
      <Dev
        name="Mikun Flo"
        role="Frontend Developer"
        skills="HTML, CSS, JavaScript"
        isDev={true}
      ></Dev>
      <Footer></Footer>
    </div>
  );
}
