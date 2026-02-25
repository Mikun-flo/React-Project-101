import DashboardImage from "./assets/pic-dashboard.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={DashboardImage} alt="Dashboard Image" />
      <h2 className="card-title"> Project 1 - Web App Dashboard</h2>
      <p className="card-text">
        This is a description of the card. It provides more details about the
        content.
      </p>
    </div>
  );
}

export default Card;
