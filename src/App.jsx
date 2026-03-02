import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./Projects.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import Dev from "./components/Dev.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <Projects></Projects>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
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

export default App;
