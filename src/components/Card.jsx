import picdashboard from "../assets/picdashboard.png";

function Card({
  title = "Project - Web App Dashboard",
  text = "This is a description of the card. It provides more details about the content.",
  image = picdashboard,
}) {
  return (
    <div className="card">
      <img src={image} alt={title}></img>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Card;
